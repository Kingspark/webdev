var express = require("express");

var app = express();

// "/" => Hello there!!!
app.get("/", function(req, res){
    res.send("Hello there!!!")
});
// "/bye" => Good Bye.
app.get("/bye", function(req, res){
    console.log("Request have been made!")
    res.send("Bye!!!")
});
// "/fellowship" => Always matters!!!.
app.get("/fellowship", function(req, res) {
    console.log("Request have been made!")
    res.send("Fellowship is always important to grow in every direction!!!")
})
//Serever config and listining
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});