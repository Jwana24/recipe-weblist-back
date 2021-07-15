const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/', (req, res) => {
    const dataIngredient = req.body;
    connection.query('INSERT INTO ingredient SET ?', [dataIngredient], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('L\'ingrédient a bien été crée');
        }
    });
});

router.get('/:id', (req, res) => {
    const idIngredient = req.params.id;
    connection.query('SELECT * FROM ingredient WHERE ingredient_id = ?', [idIngredient], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

router.patch('/:id', (req, res) => {
    const dataIngredient = req.body;
    const idIngredient = req.params.id;
    connection.query('UPDATE ingredient SET ? WHERE ingredient_id = ?', [dataIngredient, idIngredient], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('L\'ingrédient a bien été modifié');
        }
    });
});

router.delete('/:id', (req, res) => {
    const idIngredient = req.params.id;
    connection.query('DELETE FROM ingredient WHERE ingredient_id = ?', [idIngredient], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('L\'ingrédient a bien été supprimé');
        }
    });
});

module.exports = router;