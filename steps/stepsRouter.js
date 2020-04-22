const express = require('express');
const Steps = require('./steps-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  Steps.find()
  .then(obj => {
    res.status(200).json(obj)
  })
});

module.exports = router;