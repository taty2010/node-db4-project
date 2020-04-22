const express = require('express');
const Recipe = require('./recipe-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  Recipe.getRecipes()
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.get('/:id', ( req, res ) => {
  const {id} = req.params
  Recipe.getRecipesById(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.get('/list/:id', ( req, res ) => {
  const {id} = req.params
  Recipe.getShoppingListById(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});



module.exports = router;