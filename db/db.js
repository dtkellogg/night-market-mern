const mongoose = require("mongoose");

//  To connect to Database
const connectDB = async () => {
  try {
    console.log(`Mongo uri: ${process.env.MONGO_URI}`)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      
      // Mongoose options
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false, // good for future
      useNewUrlParser: true, // good for future
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1); // 1 for failure
  }
};

module.exports = connectDB;
