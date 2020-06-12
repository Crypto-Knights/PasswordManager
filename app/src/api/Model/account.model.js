const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
        email: {type: String, require: true, trim: true, minlength: 3},
        accountName: {type: String, require: true, trim: true, minlength: 3},
        userName: {type: String, require: true, trim: true, minlength: 3},
        password: {type: String, require: true, trim: true, minlength: 3},
    },
    {
        timestamps: true
    }
);

const Account = mongoose.model('Account', accountSchema)

module.exports = Account;

