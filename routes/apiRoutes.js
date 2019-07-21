var db = require("../models");  
var Sequelize = require("sequelize");

module.exports = function(app) {
  // Get all examples

  app.post("/register", function(req,res){
    console.log(req.body)
    db.User.create(req.body).then(result=>{
      console.log("account made!")
      res.json(result)
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
