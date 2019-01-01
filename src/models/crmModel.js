const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number,
        default: 0
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
