var db = require("../models");  
var Sequelize = require("sequelize");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.post("/login", passport.authenticate(
    "local", {
        successRedirect: "/",
        failureRedirect: "/login"
    }
));

  app.post("/register", function(req,res){
    console.log(req.body)
    db.User.create(req.body).then(result=>{
      res.json(result)
    });
  });

};
