// models/SampleData.js

const mongoose = require('mongoose');

const sampleDataSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('SampleData', sampleDataSchema);

