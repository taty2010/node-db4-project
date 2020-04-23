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

router.get('/:id/shoppinglist', ( req, res ) => {
  const {id} = req.params
  Recipe.getShoppingList(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.get('/:id/instructions', ( req, res ) => {
  const {id} = req.params
  Recipe.getInstructions(id)
  .then(obj => {
    res.status(200).json(obj)
  })
});

router.post('/', ( req, res ) => {
  const data = req.body
  Recipe.addRecipe(data)
    .then(data => {
      res.status(200).json(data)
    })
    .catch( err => {
      res.status(500).json({message: 'Failed to post recipe', err})
    })
})

router.put('/:id', ( req, res ) => {
  const data = req.body
  const {id} = req.params
  Recipe.getRecipesById(id)
    .then(recipe => {
        if (recipe) {
          Recipe.update(data, id)
          .then(changes => {
            res.json(changes)
          })
        } else {
          res.status(400).json({message: "cab't find recipe id"})
        }
    })
    .catch( err => {
      res.status(500).json({message: 'Failed to post recipe', err})
    })
})



module.exports = router;