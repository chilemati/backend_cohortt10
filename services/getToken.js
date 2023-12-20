const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const { JWT_SECRET } = process.env;
module.exports.getToken = (data) =>
  new Promise(function (accept, reject) {
    jwt.sign(
      {
        data: data,
      },
      String(JWT_SECRET),
      { expiresIn: 60 * 60 * 1 },
      (err, token) => {
        if (err) {
          reject(false);
        }
        accept(token);
      }
    );
  });
