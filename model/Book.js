const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  authorID: mongoose.Schema.Types.ObjectId,
  genre: String,
  description: String,
  published: Date,
  cover: String,
  revised: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Book', schema);
