// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./static"));
app.set("view engine", "ejs");
// root route to render the index.ejs view
app.get("/", function(req, res){
    res.render("index");
})
// tell the express app to listen on port 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})