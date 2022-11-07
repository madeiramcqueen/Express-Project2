const mongoose = require('mongoose');
const Schema = mongoose.Schema;

resourcesSchema = new Schema({
    name: { type: String },
    url: { type: String },
    notes: { type: String }
})

subjectSchema = new Schema({
    name: { type: String },
    resources: [resourcesSchema]
})

module.exports = mongoose.model('Subject', subjectSchema);