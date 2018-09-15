
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");



router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});




router.post("/api/burgers", function(req, res) {
  console.log("IM HERE IN THE CREATE POST");
  burger.create([
    "burgerName", "purchased"
  ], [
    req.body.burgerName, req.body.purchased
  ], function(result) {
console.log("burgerName" + req.body.burgerName)
console.log("purchased" + req.body.purchased)
    res.json({ id: result.insertId });
  });
});




router.put("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.update({
  
    purchased: true
    
  }, condition, function(result) {
console.log("ITS HAPPENING!!!");
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




router.put("/api/burgers/remove/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.update({
  
    purchased: false
    
  }, condition, function(result) {
console.log("ITS HAPPENING!!!");
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




router.delete("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {

    if (result.affectedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
