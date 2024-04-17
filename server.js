// server.js

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const SampleData = require('./models/SampleData'); // Assuming you have a SampleData model defined

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/wathare_infotech_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to fetch all sample data
app.get('/api/sample-data', async (req, res) => {
  try {
    const data = await SampleData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to filter data based on time interval
app.post('/api/sample-data/filter', async (req, res) => {
  try {
    const { startTime, frequency } = req.body;
    // Implement filtering logic based on startTime and frequency
    // Return filtered data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

