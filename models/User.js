const mongoose = require('mongoose');

// creating a Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now //this is the same as Date.now() per mongoose documentation
  }
});

module.exports = User = mongoose.model('user', UserSchema);
