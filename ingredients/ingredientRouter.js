const express = require('express');
const ingredient = require('../ingredients/ingredients-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  ingredient.find()
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.get('/:id', ( req, res ) => {
  const {id} = req.params
  ingredient.getIngredientsById(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.get('/:id/recipes', ( req, res ) => {
  const {id} = req.params
  ingredient.getRecipeIngredients(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});

module.exports = router;