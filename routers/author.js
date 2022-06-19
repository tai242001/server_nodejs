const authorController = require("../controller/authorController");

const router = require("express").Router();

//add author
router.post("/", authorController.addauthor);

module.exports = router;
