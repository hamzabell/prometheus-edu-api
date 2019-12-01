/* eslint-disable no-underscore-dangle */
const { model, Schema } = require('mongoose');
const Validator = require('validator');

const User = {
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: [Validator.isEmail, 'Invalid Email'],
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\d{11}$/g, 'Please Provide a Valid Phone Number'],
  },
  photo: {
    type: JSON,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  userRole: {
    type: String,
    required: true,
    enum: ['teacher', 'admin', 'parent'],
  },
  hash: String,
  salt: String,
};

const userSchema = new Schema(User);
const userModel = model('Users', userSchema);
module.exports = userModel;
