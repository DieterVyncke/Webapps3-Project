'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: String,
  body: String,
  rating: {type: Number, min: 0.0, max: 5.0},
  whisky: {type: mongoose.Schema.Types.ObjectId, ref: 'Whisky'}
});

module.exports = mongoose.model('Comment', CommentSchema);
