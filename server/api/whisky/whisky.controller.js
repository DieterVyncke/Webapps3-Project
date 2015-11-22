'use strict';

var _ = require('lodash');
var Whisky = require('./whisky.model');
var Comment = require('./comment.model');

// Get list of whiskys
exports.index = function(req, res) {
  Whisky.find(function (err, whiskys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(whiskys);
  });
};

// Get a single whisky
exports.show = function(req, res) {
  Whisky.findById(req.params.id, function (err, whisky) {
    if(err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Not Found'); }
    // console.log(whisky.comments);
        return res.json(whisky);
  }).populate('comments');
};

// Creates a new whisky in the DB.
exports.create = function(req, res) {
  Whisky.create(req.body, function(err, whisky) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(whisky);
  });
};

//Create a new comment on whiskypost
exports.addComment = function(req, res){
  Whisky.findById(req.body.whisky, function (err, whisky) {
    if(err) { return handleError(res, err); }
    if(!whisky) { return res.status(404).send('Whisky not found'); }

    var comment = new Comment(req.body);
    // console.log(comment);
    comment.save(function(err, comment){
      whisky.comments.push(comment);
      whisky.ratings.push(comment.rating);

      var sum = 0;
      for( var i = 0; i < whisky.ratings.length; i++ ){
          sum += whisky.ratings[i]; //don't forget to add the base
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
