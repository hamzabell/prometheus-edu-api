/* eslint-disable linebreak-style */
const express = require('express');
const ParentController = require('../../controllers/ParentController');
const auth = require('../auth');

const router = express.Router();

router.get('/read/:id', auth.required, (req, res) => ParentController.read(req, res));
router.get('/', auth.required, (req, res) => ParentController.all(req, res));
router.get('/count', auth.required, (req, res) => ParentController.count(req, res));
router.put('/update/:id', auth.required, (req, res) => ParentController.update(req, res));
router.delete('/delete/:id', auth.required, (req, res) => ParentController.delete(req, res));


module.exports = router;
