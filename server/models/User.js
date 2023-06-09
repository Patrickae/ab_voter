const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  username: {
    type: String,
    required: [true, 'Please enter username'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
    minlength: [6, 'Minimum password is 6 characters'],
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
