const express = require('express');
const router = express.Router();
const fibonacci = require('../../controllers/fibonacci');
const usersController = require('../../controllers/usersController');

// Creamos las rutas y las exportamos
router
    .get('/fibonacci', fibonacci.getFibonacci)
    .get('/', usersController.getAll)
    .get('/:userId', usersController.getOne)
    .post('/', usersController.createNew)
    .patch('/:userId', usersController.updateOne)
    .delete('/:userId', usersController.deleteOne)

module.exports = router;