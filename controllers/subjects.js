const Subject = require("../models/subject");

module.exports = {
    index,
    new: newSubject
};

function index(req, res) {
    Subject.find({}, function (err, subjects){
        res.render("subjects/index", {title: "Class Subjects", subjects})
    });
}

function newSubject(req, res) {
    res.render('subjects/new', {title: "New Subject"})
}