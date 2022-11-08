var express = require("express");
const subjects = require("../controllers/subjects");
var router = express.Router();
var subjectsCtrl = require("../controllers/subjects");
var resourcesCtrl = require("../controllers/resources");

//Get the Subjects page
router.get('/', subjectsCtrl.index);

//Make a new skill on form
router.get('/new', subjectsCtrl.new);

//Create a new skill
router.post('/', subjectsCtrl.create);

//Show subject resources page
router.get('/:id', subjectsCtrl.show);

//Create a new resource for a subject
router.post('/:id/resources', resourcesCtrl.create);

module.exports = router;