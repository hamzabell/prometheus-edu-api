/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.use('/auth', require('./userAuth'));
router.use('/users', require('./users'));

module.exports = router;
