const express = require("express");

const app = express();

// listen on port 3000
app.listen(3000);


// define your routes
app.get('/', (req,res) => [
    // run code when you're trying to acess '/'
    res.send("Hello world")
])
