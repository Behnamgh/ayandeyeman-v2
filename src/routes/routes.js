const express = require('express');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} = require('../controllers/crmController');
const {
  getModel,
  addNewModel,
  getModeWithID,
  updateModel,
  deleteModel,
  getIntent,
  postIntent
} = require('../controllers/serviceController');
const ServiceRegistry = require('./serviceRegistry');
const serviceRegistry = new ServiceRegistry();

function apiRouter(database) {
  const router = express.Router();
  router.use((req, res, next) => {
    req.serviceRegistry = serviceRegistry;
    next();
  });

  router.route('/services/:intent/:port').put((req, res, next) => {
    const serviceIntent = req.params.intent;
    const servicePort = req.params.port;

    const serviceIp = req.connection.remoteAddress.includes('::')
      ? `[${req.connection.remoteAddress}]`
      : req.connection.remoteAddress;
    serviceRegistry.add(serviceIntent, serviceIp, servicePort);
    res.json({ result: `${serviceIntent} at ${serviceIp}:${servicePort}` });
  });

  router
    .route('/service/:intent')
    .get(getIntent)
    .post(postIntent);

  router
    .route('/service/:intent/:modelId')
    .get(getIntent)
    .put(postIntent)
    .delete(getIntent);

  router
    .route('/:intent')
    .get(getModel)
    .post(addNewModel);

  router
    .route('/:intent/:modelId')
    .get(getModeWithID)
    .put(updateModel)
    .delete(deleteModel);

  return router;
}
module.exports = apiRouter;
