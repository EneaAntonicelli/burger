
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgersdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("Connection Error" + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;
