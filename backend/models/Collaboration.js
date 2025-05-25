const mongoose = require('mongoose');

const collaborationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: false
  },
  idea: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Collaboration', collaborationSchema);