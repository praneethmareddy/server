const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://praneethmareddy:saip9091@cluster0.rfvy63z.mongodb.net/mern?retryWrites=true&w=majority');
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;
