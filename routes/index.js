const express = require('express')
const router = express.Router()
const taskApi = require("./task.api");
const userApi = require('./user.api');

const taskAPI = require ('./task.api')

router.use('/tasks',taskAPI);
router.use("/user", userApi);

module.exports = router;

