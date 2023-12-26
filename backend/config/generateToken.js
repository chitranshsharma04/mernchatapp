const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "chitransh", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
