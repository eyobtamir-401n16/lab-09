'use strict';
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerGenerator = require('../docs/swagger.js');

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

module.exports = {
  server: app,
  start:startServer
};