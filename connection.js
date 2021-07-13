const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.NODE_ENV_HOST,
    user: process.env.NODE_ENV_USER,
    database: process.env.NODE_ENV_DB,
    password: process.env.NODE_ENV_PASS
});

module.exports = connection;