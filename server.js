
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: '.hbs'}));
app.set("view engine", ".hbs");

var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function() {

  console.log("Server listening on port: " + PORT);
});
