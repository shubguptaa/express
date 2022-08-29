// contain all the routes for users
// this is essentially like a mini app running in your main app.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Users List");
});

router.get("/new", (req, res) => {
	res.send("New User Form");
});

module.exports = router;