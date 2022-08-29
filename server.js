const { red } = require("@mui/material/colors");
const express = require("express");

const app = express();

// IMPORTANT: Everything runs top to bottom.

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

// import the routes
const userRouter = require("./routes/users");

// To use these routes, you need to link it
// IMPORTANT: Every route from userRouter is going to start with /users
// Essentially, anything that starts with /users, add all these routes to the end of it.
app.use("/users", userRouter);


// listen on port 3000
app.listen(3000);
