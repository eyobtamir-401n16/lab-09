'use strict';
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerGenerator = require('../docs/swagger.js');
const modelRouter = require('./routes/model-routes.js')


const app = express();
app.use(express.json());
app.use(express.urlencoded());
swaggerGenerator(app)


const startServer = (port, mongodb) =>{
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(mongodb, options);
app.listen (port, () => {
  console.log('Server is up and running on port', port)
})
}

swaggerGenerator(app);
app.use(cors());
app.use(morgan('dev'))

/**
 * home GET route
 * @group Home
 * @route GET / Home
 * @returns {object} 200 -This route show home route
 */
app.get('', (req, res, next) => {
  res.send('Lab -09 API Server Home Page!!')
})

app.use('/api/v1', modelRouter);

module.exports = {
  server: app,
  start:startServer
};