// creating a variable for express  and requiring it in
const express = require("express");
// creating a variable to use express
const app = express();
//creating variable for the port to connect to the server
const PORT = process.env.PORT || 3000;
// creating variable for a router for the controller, this also must be required in
const router = require("./controllers/project2_controller");
// create variable to use handlebars
const exphbs = require("express-handlebars");

//bodyparse middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sreving static files publicly
app.use(express.static("public"));

//express template engine: express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middleware for routing system
app.use(router);

//listen for connection on the given path
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
