const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to local MongoDB database named "todo"
    await mongoose.connect('mongodb://127.0.0.1:27017/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected to local database: todo');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
