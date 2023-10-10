const express = require('express');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


app.use(require('./routes/correoRoutes'));

app.listen(3000, ()=> {
    console.log('api encendido');
});