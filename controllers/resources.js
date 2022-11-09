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
    // Resource.findById(req.params.subjectId, function (err, subject) {
    res.render('resources/edit', { title: "Edit Resource Page", subjectId: req.params.subjectId, resourceId: req.params.resourceId })
    // })
}

function update(req, res) {
    Subject.findById(req.params.subjectId, function (err, subject) {
        console.log(subject.resources.length)
        //test
        subject.resources[0].name = 'Madeira'
        subject.save(function (err) {
            res.redirect(`/subjects/${subject._id}`)
        })
    })
    console.log(req.params.subjectId, req.params.resourceId);
    // Resource.findById(req.params.id, function (err, resource) {
    //     resource.save('resources/edit', { title: "Edit Resource Page", resource })
    // res.redirect(`/subjects/${r._id}`)
}

