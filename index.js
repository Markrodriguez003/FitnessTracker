const express = require("express"); // Importing express module to handle our node routing
const app = express(); // Initializing our express app
const path = require("path"); // Importing path node module 
const bodyParser = require("body-parser"); // Importing node body-parser to parse JSON

const mongoose = require('mongoose'); // Importing mongoose module

// Sets up the port for development
const PORT = process.env.PORT || 7080;

// Loads middleware to parse JSON and grab json from POST bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the static folder
app.use(express.static(path.join(__dirname, "public")));

// Grabs our DB and its models
// const db = require("./models");

// Express GET route that directs the user to site pages.
app.get("/", (req, res) => {
    res.sendFile('public/index.html' , { root : __dirname});
});

app.get("/stats", (req, res) => {
    res.sendFile('public/stats.html' , { root : __dirname});
});
app.get("/exercise", (req, res) => {
    res.sendFile('public/exercise.html' , { root : __dirname});
});

app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
})