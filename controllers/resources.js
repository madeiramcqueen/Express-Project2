const Subject = require("../models/subject");

// Create, edit, update, and delete resource functions

module.exports = {
    create,
    edit,
    update,
    delete: deleteResource
};

function create(req, res) {
    Subject.findById(req.params.id, function (err, subject) {
        subject.resources.push(req.body)
        subject.save(function (err) {
            res.redirect(`/subjects/${subject._id}`)
        })
    })
}

function edit(req, res) {
    Subject.findOne({ 'resources._id': req.params.id })
        .then(function (subject) {
            const resource = subject.resources.id(req.params.id)
            res.render('resources/edit', { title: "Edit Resource Page", resource })
        })

}

function update(req, res) {
    Subject.findOne({ 'resources._id': req.params.id })
        .then(function (subject) {
            const resource = subject.resources.id(req.params.id)
            resource.name = req.body.name
            resource.url = req.body.url
            resource.notes = req.body.notes

            subject.save(function (err) {
                if (err) return res.redirect('/subjects')
                res.redirect(`/subjects/${subject._id}`)
            })
        })
}

function deleteResource(req, res) {
    Subject.findOne({ 'resources._id': req.params.id })
        .then(function (subject) {
            const resource = subject.resources.id(req.params.id)
            resource.remove()

            subject.save(function (err) {
                if (err) return res.redirect('/subjects')
                res.redirect(`/subjects/${subject._id}`)
            })
        })
}

