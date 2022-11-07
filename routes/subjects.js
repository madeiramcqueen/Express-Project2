var express = require("express");
var router = express.Router();
var subjectsCtrl = require("../controllers/subjects");

//Get the Subjects page
router.get('/', subjectsCtrl.index);

//Make a new skill
router.get('/new', subjectsCtrl.new);

module.exports = router;