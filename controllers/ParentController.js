/* eslint-disable linebreak-style */
const crudHelper = require('../helpers/crudHelper');
const parentModel = require('../models/Parent');

module.exports = {

  // Set Up CRUD endpoint for School
  read: (req, res) => crudHelper.read(parentModel, 'Parent', req, res),
  count: (req, res) => crudHelper.count(parentModel, 'Parent', req, res),
  all: (req, res) => crudHelper.all(parentModel, 'Parent', req, res),
  update: (req, res) => crudHelper.update(parentModel, 'Parent', req, res),
  delete: (req, res) => crudHelper.delete(parentModel, 'Parent', req, res),
};
