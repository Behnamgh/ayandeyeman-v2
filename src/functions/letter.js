const mongoose = require('mongoose');
const { LetterSchema } = require('../models/letterModel');

const Letter = mongoose.model('Letter', LetterSchema);

exports.addNewLetter = (req, res) => {
  const newLetter = new Letter(req.body);

  newLetter.save((err, letter) => {
    if (err) {
      res.send(err);
    }
    res.json(letter);
  });
};
exports.getAllLetter = (req, res) => {
  Letter.find({}, (err, letter) => {
    if (err) {
      res.send(err);
    }
    res.json(letter);
  });
};

exports.getLetterById = (req, res) => {
  Letter.findById(req.params.letterId, (err, letter) => {
    if (err) {
      res.send(err);
    }
    res.json(letter);
  });
};

exports.confirmEmailForLetter = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.letterId }, { email_confirmed: true }, { new: true }, (err, letter) => {
    if (err) {
      res.send(err);
    }
    res.json(letter);
  });
};

exports.getLetterForAccount = (req, res) => {
  Letter.find({ email: req.params.email }, (err, letters) => {
    if (err) {
      res.send(err);
    }
    res.json(letters);
  });
};
exports.getLetterByDate = (req, res) => {};
