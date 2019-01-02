const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} = require("../controllers/crmController");

function apiRouter(database) {
  const router = express.Router();

  router
    .route("/contact")
    .get(getContacts)
    .post(addNewContact);

  router
    .route("/contact/:contactId")
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact);

  return router;
}
module.exports = apiRouter;
