var catMe = require("cat-me");
var joke = require("knock-knock-jokes");
var faker = require('faker');


//catMe();
//console.log("Hello from NPM demo app!!!");

//console.log(catMe());
//console.log(joke());
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
