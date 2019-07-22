var db = require("../models");  
var Sequelize = require("sequelize");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.post("/login", passport.authenticate(
    "local", {
        successRedirect: "/",
        failureRedirect: "*"
    }
));
app.post("/create", function(req,res){
  console.log(req.body)
  db.Event.create(req.body).then(result=>{
    console.log(result);
    window.location.replace("/");
  })
})

  app.post("/register", function(req,res){
    db.User.create(req.body).then(result=>{
      res.render("login")
    });
  });
  app.get("/api/accounts", function(req,res){
    db.User.findAll({}).then(result=>{
      res.json(result)
    })
  })
  app.get("/api/events", function(req,res){
    db.Event.findAll({}).then(result=>{
      res.json(result)
    })
  })
};