"use strict";

// Required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//  define listening port
var PORT = process.env.PORT || 3000;

// connnect to db
mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/new-inventory");


// initialize express app
var app = express();

//  view engine
app.set("view engine jade");

//  general middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static("public"));

//  routes
app.use("/", "./routes/index")

//  404 Handler

app.use(function(req, res){
  res.status(404).send(" 404 not found");
});

//  start server listening

app.listen(PORT, function(){
  console.log("express lisitening on port ${PORT},");
});