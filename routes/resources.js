var express = require("express");
var router = express.Router();
var resourcesCtrl = require("../controllers/resources");

//Edit a resource
router.get('/:id/edit', resourcesCtrl.edit);

//Update the resource with its edits
router.put('/:id', resourcesCtrl.update);

module.exports = router;