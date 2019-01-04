const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.AccountSchema = new Schema({
  email: {
    type: String,
    required: 'EMAIL_CANT_BE_EMPTY'
  },
  password: {
    type: String,
    required: 'PASSWORD_CANT_BE_EMPTY'
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  email_confirmed: {
    type: Boolean,
    default: false
  },
  mobile: {
    type: Number
  },
  status: {
    type: String,
    default: 'initial'
  }
});
