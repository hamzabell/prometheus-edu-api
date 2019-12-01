/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const reponseHelper = require('../helpers/responseHelper');
require('dotenv').config();


const secret = process.env.SECRET || 'secret';

module.exports = {
  register: (req, res) => {
    try {
      const newUser = new User(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt,
          (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => res.json(user))
              .catch((err) => res.status(400).json(err));
          });
      });
    } catch (error) {
      return reponseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  login: async (req, res) => {
    try {
      const { email } = req.body;
      const { password } = req.body;
      await User.findOne({ email })
        .then((user) => {
          if (!user) {
            return reponseHelper.json(res, 400, 'User not Found', null);
          }
          bcrypt.compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                const payload = {
                  id: user._id,
                  name: user.userName,
                };
                jwt.sign(payload, secret, { expiresIn: '7d' },
                  (err, token) => {
                    if (err) {
                      res.status(500)
                        .json({
                          error: 'Error signing token',
                          raw: err,
                        });
                    }
                    res.json({
                      success: true,
                      token: `${token}`,
                    });
                  });
              } else {
                return reponseHelper.json(res, 400, 'Token Provided is not a Match', null);
              }
            });
        });
    } catch (error) {
      return reponseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
};
