/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const School = require('../models/School');
const User = require('../models/User');


module.exports = {
  createTeacherUser: (data) => {
    // TODO: write associated code
  },
  createAdminUser: async (data) => {
    // TODO: write associated code
    const { address } = data;
    const adminData = data;
    delete adminData.address;
    const newUser = await new User(adminData);
    const newSchool = await new School({
      user: newUser.id,
      address,
    });
    return {
      user: newUser,
      school: newSchool,
    };
  },
  createParentUser: (data) => {
    // TODO: write associated code
  },
};
