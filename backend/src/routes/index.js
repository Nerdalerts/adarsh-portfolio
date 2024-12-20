const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

function setRoutes(app) {
    router.get('/api/users', indexController.getUsers);
    router.post('/api/users', indexController.createUser);
    router.get('/api/portfolio', indexController.getPortfolio);
    router.put('/api/portfolio', indexController.updatePortfolio);

    app.use(router);
}

module.exports = setRoutes;