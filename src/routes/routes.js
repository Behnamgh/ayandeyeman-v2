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

    // POST endpoint
    .post(addNewContact);

  router
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactWithID)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
    return router;
}
module.exports = apiRouter;
