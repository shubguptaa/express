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

// Now you can also create Dynamic Routes like this and access it via req.params
// Important thing to remember with static and dynamic routes is that Express goes top-down.
// So if anyhting from top to bottom matches, it returns that.
// So anything Static should always be on top of Dynamic Routes.
// If the /:userId dynamic route is put above /new, users/new will route to users/:userId since userId is just a variable.
router.get("/:userId", (req, res) => {
	res.send(`Get User with ID: ${req.params.userId}`);
});

module.exports = router;
