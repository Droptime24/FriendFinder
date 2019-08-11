module.exports = function (app) {

    
    app.get("/api/survey", function (req, res) {
        res.json(friends);

    });

    app.get("/api/names/:name", function (req, res) {
        var friendName = req.params.character;

        console.log(friendName);

        for (var i = 0; i < friendName.length; i++) {
            if (friendName === names[i].routeName) {
                return res.json(friendName[i]);
                
            }
        }

        return res.json(false);
    });

    app.post("/api/friends", function (req, res) {
    
        if (freinds.length) {
            friends.push(req.body);
            res.json(true);
        }
        else {
            noMatch.push(req.body);
            res.json(false);
        }
    });
};