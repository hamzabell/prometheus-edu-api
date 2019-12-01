/* eslint-disable linebreak-style */
const User = require('../models/User');
const crudHelper = require('../helpers/crudHelper');

module.exports = {
  delete: async (req, res) => crudHelper.delete(User, 'User', req, res),
};
