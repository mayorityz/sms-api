require("dotenv").config();
const db = require("mongoose");
const connection = db.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = connection;
// mongodb://127.0.0.1:27017
