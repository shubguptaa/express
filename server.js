const { red } = require("@mui/material/colors");
const express = require("express");

const app = express();

// listen on port 3000
app.listen(3000);

// define your routes
app.get("/", (req, res) => [
	// run this code when you're trying to acess '/'

	// Send Basic Message.
	// res.send("Hello world")

	// Send JSON
	// res.json({ message: "Hi" })

	// Send a file for user to download
	// res.download('server.js')

	// render HTML from a file caled index.html
	res.render("index", { text: "World" }),
]);

// Set your View Engine as EJS.
app.set("view engine", "ejs");
