const express = require('express');
require('dotenv').config()
var bodyParser = require('body-parser')

const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || '3000';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',routes);

app.listen(port,()=> {
    console.log("API - http:/locahost:${port}");
});







