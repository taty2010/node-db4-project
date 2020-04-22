const express = require('express');
const ingredient = require('../ingredients/ingredients-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  ingredient.find()
  .then(obj => {
    res.status(200).json(obj)
  })
});

module.exports = router;