/* eslint-disable linebreak-style */
const jwt = require('express-jwt');


const auth = {
  required: jwt({
    secret: 'secret',
  }),
  optional: jwt({
    secret: 'secret',
    credentialsRequired: false,
  }),
};

module.exports = auth;
