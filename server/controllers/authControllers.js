const bcrypt = require('bcrypt');
const User = require('../models/User');

const saltRounds = 10;

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
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const user = await User.create({ email, password: hash, username });
        res.status(201).json(user);
      });
    });
  } catch (err) {
    res.status(400).json({ errors: handleErrors(err) });
  }
};

module.exports.loginGet = (req, res) => {
  res.json({ loginGet: true });
};

module.exports.loginPost = async (req, res) => {
  const { password, username } = req.body;
  try {
    const user = await User.findOne({ username });
    bcrypt.compare(password, user.password, (err, result) => {
      res.json({ loginSuccess: result });
    });
  } catch (err) {
    res.status(403).json({ errors: 'ERROR' });
  }
};

module.exports.allUsersGet = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({ errors: handleErrors(err) });
  }
};
