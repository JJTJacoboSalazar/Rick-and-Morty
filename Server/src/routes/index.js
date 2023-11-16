const getCharById = require('../controllers/getCharById');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav')
const postUser = require('../controllers/postUser')
const login = require('../controllers/login');

const express = require('express');
const Router = express.Router();

Router.get('/character/:id', getCharById);
Router.post('/login', postUser);
Router.get('/login', login);
Router.post('/fav', postFav);
Router.delete('/fav/:id', deleteFav);


module.exports = Router;