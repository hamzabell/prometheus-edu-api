/* eslint-disable linebreak-style */
const express = require('express');
const SchoolController = require('../../controllers/SchoolController');
const auth = require('../auth');

const router = express.Router();

router.get('/read/:id', auth.required, (req, res) => SchoolController.read(req, res));
router.get('/', auth.required, (req, res) => SchoolController.all(req, res));
router.get('/count', auth.required, (req, res) => SchoolController.count(req, res));
router.put('/update/:id', auth.required, (req, res) => SchoolController.update(req, res));
router.delete('/delete/:id', auth.required, (req, res) => SchoolController.delete(req, res));


module.exports = router;
