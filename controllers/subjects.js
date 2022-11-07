const Subject = require("../models/subject");

module.exports = {
    index,
};

function index(req, res) {
    Subject.find({}, function (err, subjects){
        res.render("subjects/index", {title: "Class Subjects", subjects})
    });
}