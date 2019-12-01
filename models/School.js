/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const School = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
};


const schoolSchema = new Schema(School);
const schoolModel = model('Schools', schoolSchema);
module.exports = schoolModel;
