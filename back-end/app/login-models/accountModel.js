const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountModel = new Schema({
    username: {
        type: String,
        required: true,
        default: 1,
    },
    email: {
        type: String,
        required: true,
        default: 1,
    },
    password: {
        type: String,
        required: true
    },
    join_date: {
        type: Date,
        required: true,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model('accountModel', accountModel);
