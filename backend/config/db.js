const mongoose = require("mongoose");

const connectDb = async () => {
  // console.log(process);

  const uri = "mongodb+srv://admin:admin@cluster0.pqkyabq.mongodb.net/?retryWrites=true&w=majority";

  console.log(uri, "hlelo")
  try {
    const conn = await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    console.log("mongodb connected", conn.connection.host);

  } catch (error) {
    console.log(error.message);

    process.exit();

  }
};

module.exports = connectDb;

