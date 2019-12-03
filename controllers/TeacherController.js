/* eslint-disable linebreak-style */
const crudHelper = require('../helpers/crudHelper');
const teacherModel = require('../models/Teacher');

module.exports = {

  // Set Up CRUD endpoint for School
  read: (req, res) => crudHelper.read(teacherModel, 'Teacher', req, res),
  count: (req, res) => crudHelper.count(teacherModel, 'Teacher', req, res),
  all: (req, res) => crudHelper.all(teacherModel, 'Teacher', req, res),
  update: (req, res) => crudHelper.update(teacherModel, 'Teacher', req, res),
  delete: (req, res) => crudHelper.delete(teacherModel, 'Teacher', req, res),
};
