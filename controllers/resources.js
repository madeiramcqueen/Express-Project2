const Subject = require("../models/subject");

module.exports = {
    create,
};

function create(req, res) {
    console.log('resources create', req.params.id)
    //find the subject requested by id
    Subject.findById(req.params.id, function (err, subject) {
        //add the new resource to resource array
        subject.resources.push(req.body)
        //save
        subject.save(function (err) {
            //show on subject page
            res.redirect(`/subjects/${subject._id}`)
        })
    })
}