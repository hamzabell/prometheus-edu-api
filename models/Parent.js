/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const parent = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    autopopulate: true,
  },
  school: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Schools',
      required: true,
      autopopulate: true,
    },
  ],
  student: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Students',
      autopopulate: true,
    },
  ],
};
const parentSchema = new Schema(parent);
parentSchema.plugin(require('mongoose-autopopulate'));

const parentModel = model('Parents', parentSchema);
module.exports = parentModel;
