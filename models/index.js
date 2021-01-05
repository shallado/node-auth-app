const mongoose = require('mongoose');
const roleModel = require('./role');
const { uri } = require('../config/db');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Role = roleModel(mongoose);

module.exports = {
  Role,
};
