/* eslint-disable linebreak-style */
const express = require('express');
const authController = require('../../controllers/AuthController');

const router = express.Router();

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));
module.exports = router;
