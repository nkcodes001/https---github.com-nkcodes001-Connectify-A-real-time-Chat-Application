const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlPasrser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red);
    process.exit();
  }
};

module.exports = connectDB;
