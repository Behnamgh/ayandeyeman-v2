const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.LetterSchema = new Schema({
  message: {
    type: String,
    required: 'MESSAGE_CANT_BE_EMPTY'
  },
  private: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  // received_date: {
  //   type: Date,
  //   required: 'RECEIVED_DATE_CANT_BE_EMPTY'
  // },
  email_confirmed: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'initial'
  }
});
