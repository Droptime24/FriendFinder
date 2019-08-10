module.exports = function (app) {

    
    app.get("/api/survey", function (req, res) {
        res.json(friends);

    });

    app.get("/api/characters/:character", function (req, res) {
        var chosen = req.params.character;

        console.log(chosen);

        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    });
};