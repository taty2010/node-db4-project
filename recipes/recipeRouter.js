const express = require('express');
const Recipe = require('./recipe-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  Recipe.find()
  .then(obj => {
    res.status(200).json(obj)
  })
});

module.exports = router;