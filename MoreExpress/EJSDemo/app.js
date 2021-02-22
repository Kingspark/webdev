var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/posts", function(req, res){
    var posts = [
        {author: "Test", title: "The Incredible"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"},
        {author: "Stranger", title: "The test"}
        ];
        res.render("posts", {posts: posts});
});
app.listen(3000, function(){
    console.log("Server is started to serve you! @ 3000");
});