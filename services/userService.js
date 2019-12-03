/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const School = require('../models/School');
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Parent = require('../models/Parent');


module.exports = {
  createTeacherUser: async (data) => {
    // TODO: write associated code
    const { schoolId } = data;
    const teacherData = data;
    delete teacherData.schoolId;

    const newUser = await new User(teacherData);
    const newTeacher = await new Teacher({
      user: newUser.id,
      school: schoolId,
    });
    return {
      user: newUser,
      teacher: newTeacher,
    };
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
  createParentUser: async (data) => {
    // TODO: write associated code
    const { schoolId } = data;
    const parentData = data;
    delete parentData.schoolId;

    const newUser = await new User(parentData);
    const newTeacher = await new Parent({
      user: newUser.id,
      school: schoolId,
    });
    return {
      user: newUser,
      teacher: newTeacher,
    };
  },
};
