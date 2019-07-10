// require in mongoose
const mongoose = require('mongoose');
// require in config
const config = require('config');
// get variable from default.json
const db = config.get('mongoURI');

// connect mongoose to our database
const connectDB = async () => {
  // try catch block
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });

    console.log('MongoDB connected....');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
