/* eslint-disable linebreak-style */
const express = require('express');
const TeacherController = require('../../controllers/TeacherController');
const auth = require('../auth');

const router = express.Router();

router.get('/read/:id', auth.required, (req, res) => TeacherController.read(req, res));
router.get('/', auth.required, (req, res) => TeacherController.all(req, res));
router.get('/count', auth.required, (req, res) => TeacherController.count(req, res));
router.put('/update/:id', auth.required, (req, res) => TeacherController.update(req, res));
router.delete('/delete/:id', auth.required, (req, res) => TeacherController.delete(req, res));


module.exports = router;
