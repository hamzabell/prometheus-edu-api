/* eslint-disable linebreak-style */
module.exports = {
  json: (res, status, message, data) => res.status(status).send(JSON.stringify({
    message,
    data,
  })),
};
