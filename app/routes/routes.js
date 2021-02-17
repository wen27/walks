module.exports = app => {
    const walk = require("../controllers/walkController");
    const weather = require("../controllers/FweatherController");
    //Create a new walksPlace
    app.post("/walkPlaceList", walk.create);
    // Retrieve all walksPlace
    app.get("/walkPlaceList", walk.findAll);
    // Retrieve a single walksPlace with walkId
    app.get("/walkPlaceList/:walkId", walk.findOne);
    // Update a walksPlace with walkId
    app.put("/walkPlaceList/:walkId", walk.update);
    // Delete a walksPlace with walkId
    app.delete("/walkPlaceList/:walkId", walk.delete);



    //Get ALL Weather
    app.get("/FWeatherList", weather.findAll);

};