'use strict';

var _ = require('lodash');
var Whisky = require('./whisky.model');
var Comment = require('./comment.model');
var User = require('../user/user.model');
var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
Whisky.schema.plugin(deepPopulate, {
  populate: {
    'comments.user': {
      select: 'name',
    },
  }
});

// Get list of whiskys
exports.index = function(req, res) {
  Whisky.find(function (err, whiskys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(whiskys);
  });
};

// Get a single whisky
exports.show = function(req, res) {
  Whisky.findById(req.params.id).deepPopulate('comments.user').exec(function(err, whisky){
    if(err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Not Found'); }
        return res.json(whisky);
  });
};

// Creates a new whisky in the DB.
exports.create = function(req, res) {
  //console.log(req.body);
  Whisky.create(req.body, function(err, whisky) {
    if(err) { return handleError(res, err); }

    User.findById(whisky.user, function (err, user) {
      if (err) return next(err);
      if (!user) return res.status(401).send('Unauthorized');

      user.whiskies.push(whisky);
      user.save();

      whisky.user = user;
      whisky.save();
        return res.status(201).json(whisky);
    });
  });
};

// Deletes a whisky from the DB.
exports.destroy = function(req, res) {
  Whisky.findById(req.params.id, function (err, whisky) {
    if(err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Not Found'); }
    //console.log(whisky);
    User.findById(whisky.user, function (err, user) {
      if (err) return next(err);
      if (!user) return res.status(401).send('Unauthorized');
      user.whiskies.remove(whisky);
      user.save();
    });

    whisky.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

// Updates an existing whisky in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Whisky.findById(req.params.id, function (err, whisky) {
    if (err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Not Found'); }
    var updated = _.merge(whisky, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(whisky);
    });
  });
};

//Create a new comment on whiskypost
exports.addComment = function(req, res){
  Whisky.findById(req.body.whisky, function (err, whisky) {
    if(err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Whisky not found'); }

    var comment = new Comment(req.body);

    //get current user and push comment
    User.findById(comment.user, function (err, user) {
      if (err) return next(err);
      if (!user) return res.status(401).send('Unauthorized');
      user.comments.push(comment);
      user.save();
    });

      comment.save(function(err, comment){
        console.log(comment);
        whisky.comments.push(comment);
        whisky.ratings.push(comment.rating);

        var sum = 0;
        for( var i = 0; i < whisky.ratings.length; i++ ){
            sum += whisky.ratings[i];
        }
        whisky.rating = sum/whisky.ratings.length;
        whisky.save();
          res.json(comment);
      });

  });
};

exports.showAllComments = function(req, res){
  Comment.find(function (err, comment) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(comment);
  });
}


//errorhandling
function handleError(res, err) {
  return res.status(500).send(err);
}
