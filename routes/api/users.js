/* eslint-disable linebreak-style */
const express = require('express');
const userController = require('../../controllers/UserController');
const auth = require('../auth');

const router = express.Router();

router.delete('/terminate/:id', auth.required, (req, res) => userController.delete(req, res));

module.exports = router;
