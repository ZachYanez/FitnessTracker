const path = require("path");
const express = require("express");


module.exports = function(app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/excercise", function(req,res){res.sedFile(path.join(__dirname, "../public/exercise.html"));
});
    app.get("/stats", function(req,res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};