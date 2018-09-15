var connection = require("../config/connection.js");

// FUNCTION THAT PUSHES AS MANY "?" TO AN ARRAY AS THE NUM VALUE YOU PASS AS AN ARGUMENT
// SECOND PORTION TAKES THE ARRAY AND TURNS IT INTO A STRING LIKE SO: "?,?,?,?".
function questionMarks(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
}

// PASS AN OBJECT. FOR EVERY PROPERTY IN THE OBJECT CHECK TO SEE IF THE OBJECT HAS THE PROPERTY PASSED IN THE hasOwnProperty() ARGUMENT. PUSH KEY=KEY TO THE ARRAY AND CONVERT IT TO A STRING.
function objToSql(obj) {
  var array = [];

  for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
        array.push(key + '=' + obj[key]);
    }
  }
    return array.toString();
}

var orm = {

  selectAll: function (tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function (err, result) {

          if (err) throw err;

          cb(result);

      });

  },
  insertOne: function (table, cols, vals, cb) {

    var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += questionMarks(vals.length);
      queryString += ") ";

      connection.query(queryString, vals, function (err, result) {

          if (err) throw err;
         
          cb(result);

      });
  },
  updateOne: function (table, objColVals, condition, cb) {

    var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function (err, result) {
          if (err) throw err;

          cb(result);

      });
  },
  deleteOne: function (table, condition, cb) {

    var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function (err, result) {

          if (err) throw err;

          cb(result);

      });
}
};
module.exports = orm;
