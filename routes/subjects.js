var express = require("express");
var router = express.Router();
var subjectsCtrl = require("../controllers/subjects");
var resourcesCtrl = require("../controllers/resources");


//all urls start with /
//Get the Subjects page
router.get('/', subjectsCtrl.index);

//Make a new subject on form
router.get('/new', subjectsCtrl.new);

//Create a new subject
router.post('/', subjectsCtrl.create);

//Show subject resources page
router.get('/:id', subjectsCtrl.show);

//Create a new resource for a subject
router.post('/:id/resources', resourcesCtrl.create);

//Delete a subject
router.delete('/:id', subjectsCtrl.delete);

//Edit a resource
router.get('/:subjectId/resources/:resourceId/edit', resourcesCtrl.edit);

//Update the resource with its edits
router.put('/:subjectId/resources/:resourceId', resourcesCtrl.update);

module.exports = router;