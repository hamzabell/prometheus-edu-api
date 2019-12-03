/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.use('/auth', require('./userAuth'));
router.use('/users', require('./users'));
router.use('/schools', require('./schools'));
router.use('/teachers', require('./teachers'));
router.use('/parents', require('./teachers'));

module.exports = router;
