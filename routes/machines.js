const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/', (req, res) => {
    const dataMachine = {
        machine_name: req.body.machine_name
    };

    connection.query('INSERT INTO machine SET ?', [dataMachine], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('La machine a bien été créée');
        }
    });
});

router.get('/:id', (req, res) => {
    const idMachine = req.params.id;
    connection.query('SELECT * FROM machine WHERE machine_id = ?', [idMachine], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

router.patch('/:id', (req, res) => {
    const dataMachine = req.body;
    const idMachine = req.params.id;
    connection.query('UPDATE machine SET ? WHERE machine_id = ?', [dataMachine, idMachine], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    }) ;
});

router.delete('/:id', (req, res) => {
    const idMachine = req.params.id;
    connection.query('DELETE FROM machine WHERE machine_id = ?', [idMachine], (err, _) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('La machine a bien été supprimé');
        }
    });
});

module.exports = router;