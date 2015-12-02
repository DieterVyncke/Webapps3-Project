'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WhiskySchema = new Schema({
  name: {type: String, index: true},
  color: String,
  targetprice: Number,
  rating: {type: Number, default: ''},
  rare: Boolean,
  // tags: Array,
  taste: String,
  nose: String,
  region: String,
  image: {type: String, default: 'assets/images/no-image.png'},
  releasedate: { type: Date, default: Date.now },
  percentage: String,
  description: String,
  years: String,
  //CommentSchema
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  ratings: [{type: Number}],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Whisky', WhiskySchema);
