const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse Requests Of Content-type: application/json
app.use(bodyParser.json());


// //CORS
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
//     next();
// });


// Parse Requests Of Content-type: Application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Defaults Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

//Include Routes 
require('./app/routes/routes.js')(app);

// Set Port, Listen For Requests
app.listen(3000, () => {
    console.log("成功連線，請訪問 localhost:3000");
});