const mongoose = require('mongoose');
const { AccountSchema } = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../configs');

const Account = mongoose.model('Account', AccountSchema);

const JWT_SECRET = config.JWT_SECRET || 'XHAREEuyaA0eOFF6NwVjchERhhU3QyfK50dTWBENmlbHCiuPScMD9NgPheWxqhz';

exports.addNewAccount = (req, res) => {
  const newAccount = new Account(req.body);

  newAccount.save((err, acc) => {
    if (err) {
      res.send(err);
    }
    res.json(acc);
  });
};
exports.auth = (req, res) => {
  Account.findOne({ email: req.body.email }, (err, account) => {
    if (!account) {
      return res.status(404).json({ message: 'user not found' });
    }
    if (account.password !== req.body.password) {
      return res.status(401).json({ message: 'incorrect password' });
    }
    const payload = {
      email: account.email,
      mobile: account.mobile
    };
    jwt.sign(payload, JWT_SECRET, function(err, token) {
      if (err) {
        console.log(err);
        return res.status(401).json({ message: 'Error happend,Try again later' });
      }
      res.json({
        message: 'successfully logged in',
        token: token
      });
    });
    // const token = jwt.sign(payload, config.JWT_SECRET);
  });
};
exports.reAuth = (req, res) => {
  jwt.verify(req.body.token, JWT_SECRET, function(err, decoded) {
    if (err) {
      return res.status(401).json({ message: 'token invalid' });
    }
    return res.status(200).json(decoded);
  });
};
