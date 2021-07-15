const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const api = require('./routes');
require('dotenv').config();
const port = process.env.NODE_ENV_PORT || 3000;

app.use('/api', api);

app.listen(port, (err) => {
    if (err) {
        throw new Error('Oops ! Un problème est survenu !');
    }
    console.log(`Server listening on ${port}...`);
});