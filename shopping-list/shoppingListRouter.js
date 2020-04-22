const express = require('express');
const List = require('./list-model');
const router = express.Router();

router.get('/', ( req, res ) => {
  List.getShoppingList()
  .then(obj => {
    res.status(200).json(obj)
  })
});

module.exports = router;