const express = require('express');
const app = express();

let send = require('../controllers/correoController');

app.post('/envio', send.sendEmail);

module.exports = app;