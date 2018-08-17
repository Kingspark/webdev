var faker = require("faker");

// for(var i = 0; i < 10; i++){
//     var name = faker.name.findName();
//     console.log(name);
// }
//var name = faker.name.findName();
// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
console.log("=============================================================")
console.log("                 Welcome to My shop! ")
console.log("=============================================================")
for(var i = 0; i < 10; i++){
    var item = faker.commerce.productName();
    var price = faker.commerce.price();
    var product = faker.commerce.product()
    var adjective = faker.commerce.productAdjective();
    console.log(item +" - $"+ price +" - "+ product +" - "+ adjective); 
}
