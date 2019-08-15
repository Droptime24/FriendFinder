var path = require("path");
var express = require("express")
var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);

    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var surveyScores = userData.scores;

        for (var i = 0; i < friendsArray.length; i++) {
            var currentFriends = friendsArray[i];
            totalDifference = 0;
            console.log("Difference ", totalDifference)
            console.log("Current Friends ", currentFriends)
            
            for (var j = 0; j < currentFriends.score.length; j++){
                var currentFriendsScore = currentFriends.score[j];
                console.log(currentFriendsScore)
            }
        }
        console.log("Results ", surveyScores, userData)
    });

    // clear data
    app.post("/api/clear", function (req, res) {

        friends.length = 0;
        res.json({ ok: true });
    });
};
