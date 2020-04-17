'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {type: 'string', required: true},
  region: {type: 'string', required: true},
  capitalCity:{type: 'string', required: true}
})

const model = mongoose.model('products', schema);

module.exports = model;