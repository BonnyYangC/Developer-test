const express = require('express')
const { getAllIssues, getIssue, createIssue, deleteIssue, updateIssue } = require("../controllers/issuesController.js");

const router = express.Router()
router.route('/').get(getAllIssues)

router.route("/:id").get(getIssue)

router.route("/").post(createIssue)

router.route("/:id").delete(deleteIssue)

router.route("/:id").patch(updateIssue)

module.exports = router;