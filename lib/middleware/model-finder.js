'use strict';

const CatSchema = require('../models/categories-schema.js');
const ProSchema = require('../models/products-schema.js');
const Model = require('../models/model.js');

const modelFinder = (req, res, next) => {
  switch(req.params.model){
    case 'products':
    req.colModel = new Model(ProSchema);
    next();
    break;
    case 'categories':
      req.colModel = new Model (CatSchema);
      next();
      break;
    default:
      res.status(404);
      res.end();
      break;
  }
};

module.exports = modelFinder;