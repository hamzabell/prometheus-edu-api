/* eslint-disable linebreak-style */
const crudHelper = require('../helpers/crudHelper');
const schoolModel = require('../models/School');

module.exports = {

  // Set Up CRUD endpoint for School
  read: (req, res) => crudHelper.read(schoolModel, 'School', req, res),
  count: (req, res) => crudHelper.count(schoolModel, 'School', req, res),
  all: (req, res) => crudHelper.all(schoolModel, 'School', req, res),
  update: (req, res) => crudHelper.update(schoolModel, 'School', req, res),
  delete: (req, res) => crudHelper.delete(schoolModel, 'School', req, res),
};
