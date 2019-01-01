const {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} = require('../controllers/crmController');

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)

        // POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
        // get specific contact
        .get(getContactWithID)

        // put request
        .put(updateContact)

        // delete request
        .delete(deleteContact);
};

// export default routes;
module.exports = routes;
