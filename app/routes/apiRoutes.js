var express = require('express');
var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    // compare friends
    app.post("/api/friends", function (req, res) {
        // request data
        var newFriend = {
            name: "",
            photo: "",
            score: 10000,
        };
        console.log("new friend", newFriend)

        // get survey data to compare
        var surveyData = req.body;
        var surveyScores = surveyData.score;
        console.log(surveyData)

        // score difference
        var totalDifference;
      
        // get data from friends.js
        for (var i = 0; i < friendsArray.length; i++) {
            var oldFriend = friendsArray[i];
            totalDifference = 0;

            for (var j = 0; j < oldFriend.score.length; j++) {
                var oldFriendScore = oldFriend.score[j];
                var newSurveyScores = surveyScores[j];
                totalDifference += Math.abs(parseInt(newSurveyScores) - Math.abs(parseInt(oldFriendScore)));

            }
            if (totalDifference <= newFriend.score) {
              
                newFriend.name = oldFriend.name;
                newFriend.photo = oldFriend.photo;
                newFriend.score = totalDifference;
            }
        }

        friendsArray.push(oldFriend);
        res.json(newFriend);
        console.log ("Log: ", newFriend)
    });
};