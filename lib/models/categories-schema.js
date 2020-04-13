'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  region: {type: 'string', required: true},
  continents: {type: 'string', required: true},
  category:{type: 'string', required: true}
})

const modle = mongoose.model('categories', Schema);

module.exports = modle;