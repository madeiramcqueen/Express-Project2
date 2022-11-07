const Subject = require("../models/subject");

module.exports = {
    create,
};

function create(req, res) {
    Subject.findById(req.params.id), function (err, subject) {
        subject.resources.push(req.body)
        subject.save(function(err){
            res.redirect(`/subjects/show${subject._id}`)
        })
    }
}