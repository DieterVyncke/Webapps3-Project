'use strict';

var _ = require('lodash');
var Whisky = require('./whisky.model');

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
    return res.json(whisky);
  });
};

// Creates a new whisky in the DB.
exports.create = function(req, res) {
  Whisky.create(req.body, function(err, whisky) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(whisky);
  });
};


//errorhandling
function handleError(res, err) {
  return res.status(500).send(err);
}
