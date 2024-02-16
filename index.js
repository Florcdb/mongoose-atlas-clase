require('dotenv').config();
console.log(process.env.MONGO_URL);


const express = require('express');
const app = express();
const PORT = 8080;

const { dbConnection } = require('./config/config'); 

const routes = require('./routes');

app.use(express.json());

app.use('/', routes);


dbConnection();


app.listen(PORT, () => console.log(`Se está escuchando en el puerto http://localhost:8080`));
