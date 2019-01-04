const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { addNewLetter } = require('../functions/letter');
const { addNewAccount, auth, reAuth } = require('../functions/account');
function nothing(req, res) {
  res.json({ message: 'nothing' });
}

function apiRouter() {
  const router = express.Router();

  router.route('/addNewLetter').post(addNewLetter);
  router.route('/addNewAccount').post(addNewAccount);

  router.route('/auth').post(auth);
  router.route('/reAuth').post(reAuth);
  router
    .route('/service/:intent/:modelId')
    .get(nothing)
    .put(nothing)
    .delete(nothing);

  router
    .route('/:intent')
    .get(nothing)
    .post(nothing);

  router
    .route('/:intent/:modelId')
    .get(nothing)
    .put(nothing)
    .delete(nothing);

  return router;
}
module.exports = apiRouter;
