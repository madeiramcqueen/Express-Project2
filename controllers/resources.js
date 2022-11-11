const Subject = require("../models/subject");

module.exports = {
    create,
    edit,
    update
};

function create(req, res) {
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


function edit(req, res) {
    res.render('resources/edit', { title: "Edit Resource Page", subjectId: req.params.subjectId, resourceId: req.params.resourceId })
}

function update(req, res) {
    Subject.findById(req.params.subjectId, function (err, subject) {
        subject.resources.forEach(function (r) {
            if (req.params.resourceId == r._id) {
                r.name = req.body.name
                r.url = req.body.url
                r.notes = req.body.notes
            }
        })

        subject.save(function (err) {
            res.redirect(`/subjects/${subject._id}`)
        })
    })
}

