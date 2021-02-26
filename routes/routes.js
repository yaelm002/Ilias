const express = require("express");
const app = express();
const seminar = require("../models/seminar");

app.set("view engine", "ejs");
app.set("views", "views");

function listen(){
    app.use(express.static("public"));
    app.get("/", function(req,res,next){
        res.render("dashboard",{titel:"ILIAS LIGHT"});
    });
    
    app.get("/seminarliste", function(req,res,next){
        res.render("seminarliste",{titel:"Seminarliste", array: seminar.array});
    });
    
    app.get("/seminardetail", function(req,res,next){
        res.render("seminardetail",{titel:"Börsenseminar"});
    });
    
    app.get("/seminarleiter", function(req,res,next){
        res.render("seminarleiter",{titel:"Herr Müller"});
    });
    
    app.get("/seminarneu", function(req,res,next){
        res.render("seminarneu",{titel:"Seminarformular"});
    });

    app.use(function(req,res){
        res.render("404");
    });

    app.listen(8040);
};

module.exports.listen=listen;
