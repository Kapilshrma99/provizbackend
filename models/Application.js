// server/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    form:String,
    name: String,
    phone: String,
    email: String,
    statement: String,
});

module.exports = mongoose.model('Application', ApplicationSchema);
