// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
let { LetterSchema } = require('../models/letterModel');
let { AccountSchema } = require('../models/accountModel');

const Contact = mongoose.model('Contact', ContactSchema);

exports.addNewContact = (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactId }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted contact' });
  });
};
