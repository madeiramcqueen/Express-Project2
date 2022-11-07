var express = require("express");
var router = express.Router();
var subjectsCtrl = require("../controllers/subjects");

//Get the Subjects page
router.get('/', subjectsCtrl.index);

//Make a new skill on form
router.get('/new', subjectsCtrl.new);

//Create a new skill
router.post('/', subjectsCtrl.create);

//Show subject resources page
router.get('/:id', subjectsCtrl.show);

module.exports = router;