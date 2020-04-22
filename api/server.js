const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('../recipes/recipeRouter');
const ingredientRouter = require('../ingredients/ingredientRouter');
const stepsRouter = require('../steps/stepsRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);
server.use('/api/steps', stepsRouter);
server.use('/api/ingredients', ingredientRouter);

server.use('/', ( req, res ) => {
  res.status(200).json('Welcome to the Ingredient api')
});

module.exports = server;
