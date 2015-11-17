'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: String,
  body: String,
  rating: Number,
  whisky: [{type: mongoose.Schema.Types.ObjectId, ref: 'Whisky'}]
});

module.exports = mongoose.model('Comment', CommentSchema);
