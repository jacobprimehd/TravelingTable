var db = require("../models");  
var Sequelize = require("sequelize");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.post("/login", passport.authenticate("local"), function(req, res) {
    var userValue = req.user.dataValues
    res.render("index",userValue)
  });

  app.post("/register", function(req,res){
    console.log(req.body)
    db.User.create(req.body).then(result=>{

      res.render("login")
    });
  });
  app.get("/api/accounts", function(req,res){
    db.User.findAll({}).then(result=>{
      res.json(result)
    })
  })
};