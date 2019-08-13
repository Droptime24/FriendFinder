var path = require("path");
var express = require("express")
var friendsArray = require("../data/friends");

module.exports = function (app) { 
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //checking for table
        console.log(req.body)
        if (friendsArray.length <= 5) {
            friendsArray.push(req.body);
            res.json(true);
        }
    });

    // clear data
    app.post("/api/clear", function (req, res) {
        
        friends.length = 0;
        res.json({ ok: true });
    });
};
