var express = require("express");
const subjects = require("../controllers/subjects");
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

module.exports = router;