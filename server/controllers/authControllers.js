const User = require('../models/User');

const handleErrors = (err) => {
  console.log(Object.values(err.errors), err.code);

  const errors = {};

  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
  return errors;
};

module.exports.signupGet = (req, res) => {
  res.json({ signupGet: true });
};

module.exports.signupPost = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const user = await User.create({ email, password, username });
    res.status(201).json(user);
  } catch (err) {
    res.json({ errors: handleErrors(err) });
  }
};

module.exports.loginGet = (req, res) => {
  res.json({ loginGet: true });
};

module.exports.loginPost = async (req, res) => {
  res.json({ loginPost: true });
};
