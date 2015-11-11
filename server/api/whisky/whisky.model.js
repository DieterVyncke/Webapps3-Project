'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WhiskySchema = new Schema({
  name: String,
  color: String,
  rating: Number,
  tags: Array,
  taste: String,
  region: String,
  image: String,
  //releasedate: Date,
  percentage: String,
  description: String,
  years: String,
  nose: String
});

module.exports = mongoose.model('Whisky', WhiskySchema);
