// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Add Code Here
// Table array here
var tables = [
    {
      name: "John Doe",
      number: "555-555-5555",
      email: "email@email.com",
      unique: "Unique ID"
    }
];
var waitlist = [];
// Basic route that sends the user first to the AJAX Page
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
// Brings user to reservation form
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });
//
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
    app.post("/api/reserve", function(req, res) {
        var newTable = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newTable.unique = newTable.unique.replace(/\s+/g, "").toLowerCase();
        console.log(newTable);
        tables.push(newTable);
        res.json(newTable);
    });
    app.post("/api/waitlist", function(req, res) {
        var newTable = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newTable.unique = newTable.unique.replace(/\s+/g, "").toLowerCase();
        console.log(newTable);
        waitlist.push(newTable);
        res.json(newTable);
    });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});