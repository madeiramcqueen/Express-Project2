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
    Subject.findOne({'resource.id':req.params.id})
    .then(function(subject){
        const resource = subject.resources.id(req.params.id)
        res.render('resources/edit', { title: "Edit Resource Page", resource })
    })

}

function update (req, res) {
    Subject.findOne({'resource.id':req.params.id})
    .then(function(subject){
        const resource = subject.resources.id(req.params.id)
        resource.name = req.body.name
        resource.url = req.body.url
        resource.notes = req.body.notes

        subject.save(function(err) {
            if (err) return res.redirect('/subjects')
            res.redirect(`/subjects/${subject._id}`)
        })
    })
}

