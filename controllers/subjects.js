const Subject = require("../models/subject");

module.exports = {
    index,
    new: newSubject,
    create,
    show,
    delete: deleteSubject
};

function index(req, res) {
    Subject.find({}, function (err, subjects) {
        res.render("subjects/index", { title: "Class Subjects", subjects })
    });
}

function newSubject(req, res) {
    res.render('subjects/new', { title: "New Subject" })
}

function create(req, res) {
    Subject.create(req.body)
    res.redirect('/subjects')
}

function show(req, res) {
    Subject.findById(req.params.id, function (err, subject) {
        res.render('subjects/show', { title: "Subject Resource Page", subject })
    })
}

function deleteSubject(req, res) {
    Subject.findByIdAndDelete(req.params.id, function (err, docs) {
        res.redirect('/subjects')
    })
}