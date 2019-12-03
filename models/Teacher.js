/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const teacher = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    autopopulate: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'Schools',
    required: true,
    autopopulate: true,
  },

};
const teacherSchema = new Schema(teacher);
teacherSchema.plugin(require('mongoose-autopopulate'));

const teacherModel = model('Teachers', teacherSchema);
module.exports = teacherModel;
