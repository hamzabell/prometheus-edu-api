/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const student = {
  school: {
    type: Schema.Types.ObjectId,
    ref: 'Schools',
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Parents',
    required: true,
  },
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
  photo: {
    type: JSON,
  },
};
const studentSchema = new Schema(student);

const studentModel = model('Students', studentSchema);
module.exports = studentModel;
