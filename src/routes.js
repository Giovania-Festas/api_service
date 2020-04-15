const { Router } = require('express');
const routes = Router();

const userController = require('./controllers/UserController')

routes.post('/user', userController.store);

module.exports = routes;