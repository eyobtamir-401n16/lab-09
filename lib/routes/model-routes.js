'use strict';

const express = require('express');
const router = express.Router();
const proSchema = require('../lib/models/products-schema.js');
const Model = require('../lib/models/model.js');

const ProModel = new Model(proSchema);

/**
 * Products GET route
 * @group Products
 * @route GET /products
 * @returns {object} 200 -This route show data from products object
 */

router.get('/products', async (req, res, next) => {
  let results = await ProModel.readByQuery({});
  res.send(results)
});

/**
 * Products GET route
 * @group Products
 * @route GET /products
 * @returns {object} 200 -This route show data from products object
 */

router.get('/products/:_id', async (req, res, next) => {
  let record = await ProModel.read(req.params._id);
  res.send(record);
});

/**
 * Products POST route
 * @group Products
 * @route POST /products
 * @returns {object} 200 -This route create data inside products object
 */

router.post('/products', async (req, res, next) => {
  let record = await ProModel.create(req.body)

  res.send(record);
});

/**
 * Products PUT route
 * @group Products
 * @route PUT /products/:id
 * @returns {object} 201 -This route update data in products object
 */

router.put('/products/:_id', async (req, res, next) => {
  console.log('rec', req.body)
  let record = await ProModel.update(req.params._id, req.body)
  console.log('update', record)
  res.send(record);
});

/**
 * Products DELETE route
 * @group Products
 * @route DELETE /products/:id
 * @returns {object} 200 -This route delete data in products object
 */

router.delete('/products/:_id', async (req, res, next) => {
  let record = await ProModel.delete(req.params._id);
  console.log('delete in product routes', record);
  res.send(record)
});
 
module.exports = router;
