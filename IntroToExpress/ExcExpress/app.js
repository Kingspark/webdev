var express = require("express");

var app = express();

//=================================
// Routes
//=================================
//Route #1
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

//Route #2
app.get("/speak/:animal", function(req, res){
    var route = req.params.animal
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof'
    }
    var sound = sounds[route];
    res.send("The " + route + " says '" + sound + "'")
});

//Route #3
app.get("/repeat/:word/:id", function(req, res) {
     var str = req.params.word;
     var num = Number(req.params.id);
     var result = ""
     for (var i = 0; i < num; i++){
         result += str + " ";
     }
     res.send(result);
})

//Route #4
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})



//Running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});