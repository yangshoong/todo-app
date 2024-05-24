const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
require('dotenv').config();
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
app.use(cors());
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

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
