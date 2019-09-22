const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  dateOfBirth: Date
});

module.exports = mongoose.model('Author', schema);
