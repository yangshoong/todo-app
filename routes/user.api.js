const express = require ('express')
const router = express.Router();

router.post("/", ()=>{
  res.send("create user controller will be here");
});

module.exports = router;