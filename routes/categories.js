const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/', (req, res) => {
    const dataCategory = req.body;
    connection.query('INSERT INTO category SET ?', [dataCategory], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('La catégorie a bien été crée');
        }
    });
});

router.get('/:id', (req, res) => {
    const idCategory = req.params.id;
    connection.query('SELECT * FROM category WHERE category_id = ?', [idCategory], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

router.patch('/:id', (req, res) => {
    const dataCategory = req.body;
    const idCategory = req.params.id;
    connection.query('UPDATE category SET ? WHERE category_id = ?', [dataCategory, idCategory], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('La catégorie a bien été modifiée');
        }
    });
});

router.delete('/:id', (req, res) => {
    const idCategory = req.params.id;
    connection.query('DELETE FROM category WHERE category_id = ?', [idCategory], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('La catégorie a bien été supprimée');
        }
    });
});

module.exports = router;