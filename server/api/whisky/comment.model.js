'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: {type: String, require: true},
  body: {type: String, require: true},
  rating: {type: Number, min: 0.0, max: 5.0, require: true},
  whisky: {type: mongoose.Schema.Types.ObjectId, ref: 'Whisky'}
});

module.exports = mongoose.model('Comment', CommentSchema);
