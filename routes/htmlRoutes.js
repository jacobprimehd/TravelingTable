var db = require("../models");
var passport = require("passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log(req.user)
    res.render("index",req.user);
  });
  app.get("/create",isAuthenticated, function (req, res) {
        res.render("createEvent",req.user);
  });
  app.get("/event", function (req,res){
    res.render("event", req.user);
  });
  app.get("/login", function(req,res){
    res.render("login");
  });
  app.get("/user", function(req,res){
    res.render("user",req.user);
  });
  app.get("/register", function(req,res){
    res.render("register");
  })
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};