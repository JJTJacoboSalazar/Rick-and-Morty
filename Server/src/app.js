const express = require('express');
const server = express();
const Router = require('./routes/index');
const morgan = require('morgan');

server.use(morgan('dev'));

// Middleware que configura los encabezados

server.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
// Analiza el cuerpo de las solicitudes en JSON
server.use(express.json());
// Agrega el prefijo a todas las rutas
server.use('/rickandmorty', Router);


module.exports = server;