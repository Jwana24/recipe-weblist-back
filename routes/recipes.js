const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/', (req, res) => {
    const dataRecipe = {
        recipe_image: req.body.image,
        recipe_time: req.body.time,
        recipe_name: req.body.name,
        recipe_text: req.body.text,
        recipe_author: req.body.author,
        recipe_date_creation: req.body.date,
    };
    connection.query('INSERT INTO recipe SET ?', [dataRecipe], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('La recette a bien été créée');
        }
    });
});

router.get('/', (req, res) => {
    const idRecipe = req.params.id;
    connection.query('SELECT * FROM recipe', [], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

router.get('/:id', (req, res) => {
    const idRecipe = req.params.id;
    connection.query('SELECT * FROM recipe WHERE recipe_id = ?', [idRecipe], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

router.patch('/:id', (req, res) => {
    const dataRecipe = req.body;
    const idRecipe = req.params.id;
    connection.query('UPDATE recipe SET ? WHERE recipe_id = ?', [dataRecipe, idRecipe], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('La recette a bien été modifiée');
        }
    });
});

router.delete('/:id', (req, res) => {
    const idRecipe = req.params.id;
    connection.query('DELETE FROM recipe WHERE recipe_id = ?', [idRecipe], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('La recette a bien été supprimée');
        }
    });
});

module.exports = router;