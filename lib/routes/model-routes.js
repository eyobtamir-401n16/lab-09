'use strict';

const express = require('express');
const router = express.Router();


const modelFinder = require('../middleware/model-finder.js');


router.param('model', modelFinder);
/**
 * Model GET route
 * @group Model
 * @route GET /model/
 * @returns {object} 200 -This route show data from model/ object
 */

router.get('/:model', async (req, res, next) => {
  let results = await req.colModel.readByQuery({});
  res.send(results)
});

/**
 * Model GET route
 * @group Model
 * @route GET /model/
 * @returns {object} 200 -This route show data from model/ object
 */

router.get('/:model/:_id', async (req, res, next) => {
  let record = await req.colModel.read(req.params._id);
  res.send(record);
});

/**
 * Model POST route
 * @group Model/
 * @route POST /model/
 * @returns {object} 200 -This route create data inside model object
 */

router.post('/:model', async (req, res, next) => {
  let record = await req.colModel.create(req.body)

  res.send(record);
});

/**
 * Model PUT route
 * @group model/
 * @route PUT /model/:id
 * @returns {object} 201 -This route update data in model/ object
 */

router.put('/:model/:_id', async (req, res, next) => {
  console.log('rec', req.body)
  let record = await req.colModel.update(req.params._id, req.body)
  console.log('update', record)
  res.send(record);
});

/**
 * model DELETE route
 * @group model/
 * @route DELETE /model/:id
 * @returns {object} 200 -This route delete data in model object
 */

router.delete('/model/:_id', async (req, res, next) => {
  let record = await req.colModel.delete(req.params._id);
  console.log('delete in product routes', record);
  res.send(record)
});
 
module.exports = router;
