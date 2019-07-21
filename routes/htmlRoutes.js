var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/create", function (req, res) {
      res.render("createEvent");
  });
  app.get("/event", function (req,res){
    res.render("event");
  });
  app.get("/login", function(req,res){
    res.render("login");
  });
  app.get("/user", function(req,res){
    res.render("user");
  });
  app.get("/register", function(req,res){
    res.render("registration");
  })
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
