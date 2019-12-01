/* eslint-disable linebreak-style */
const User = require('../models/User');
const responseHelper = require('../helpers/responseHelper');

module.exports = {
  delete: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      const deletedUser = await User.deleteOne({ _id: req.params.id });
      if (!deletedUser) {
        return responseHelper.json(res, 400, 'User not deleted successfully', null);
      }
      return responseHelper.json(res, 200, 'User Deleted Successfully', user);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
};
