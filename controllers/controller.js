
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/", function(req, res) {

  burger.all(function(data) {

    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);

  }); // END OF ALL FUNCTION
}); // END OF GET FUNCTION




router.post("/api/burgers", function(req, res) {
  
    burger.create(
      ["burgerName", "purchased"], 
      [req.body.burgerName, req.body.purchased], 
      function(result) {

      res.json({ id: result.insertId });

    }); // END OF CREATE FUNCTION
}); // END OF POST FUNCTION




router.put("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.update({
  
    purchased: true
    
  }, condition, function(result) {

    if (result.changedRows == 0) {
      
      return res.status(404).end();

    } else {

      res.status(200).end();
    }

  }); // END OF UPDATE FUNCTION
}); // END OF PUT FUNCTION




router.put("/api/burgers/remove/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.update({
  
    purchased: false
    
  }, condition, function(result) {

    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }

  }); // END OF UPDATE FUNCTION
}); // END OF PUT FUNCTION




router.delete("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {

    if (result.affectedRows == 0) {
      
      return res.status(404).end();
    } else {

      res.status(200).end();
    }

  }); // END OF BURGER.DELETE FUNCTION
}); // END OF ROUTER.DELETE FUNCTION


module.exports = router;
