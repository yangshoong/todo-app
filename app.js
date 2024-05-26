const express = require('express');
console.log("1");
const mongoose = require('mongoose');
console.log("2");
const cors = require('cors');
console.log("3");
const bodyParser = require('body-parser');
console.log("4");
const indexRouter = require('./routes/index');
console.log("5");
require('dotenv').config();
console.log("6");
const app = express();
console.log("7");
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log("8");
app.use(cors());
console.log("9");
app.use(bodyParser.json());
console.log("10");
app.use("/api", indexRouter);
console.log("11");

const mongoURI = MONGODB_URI_PROD;
console.log("12");

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.error("DB connection fail", err);
  });

app.listen(process.env.PORT || 5001, () => {
  console.log("server on 5001");
});