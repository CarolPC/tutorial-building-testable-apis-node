const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = 'mongodb://localhost:27020/test';

const connect = () => mongoose.connect(mongodbUrl);

module.exports = { mongoose, connect };
