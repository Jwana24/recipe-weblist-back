const express = require('express');
const router = express.Router();
const categories = require('./categories');
const ingredients = require('./ingredients');
const recipes = require('./recipes');
const machines = require('./machines');

router.use('/categories', categories);
router.use('/ingredients', ingredients);
router.use('/recipes', recipes);
router.use('/machines', machines);

module.exports = router;