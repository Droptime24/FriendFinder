module.exports = function (app) {

    
    app.get("/api/survey", function (req, res) {
        res.json(friends);

    });

    app.get("/api/htmlRoutes", function (req, res) {
        res.json();
    });
}