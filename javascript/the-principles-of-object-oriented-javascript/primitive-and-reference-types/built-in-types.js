var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");


// object and literals

//var book = {
//    name: "The Principles of Object-Oriented JavaScript",
//    year: 2014
//};
//
// or ...

//var book = {
//    "name": "The Principles of Object-Oriented JavaScript",
//    "year": 2014
//};

var book = new Object();
book.name = "The Principles of Object-Oriented JavaScript.";
book.year = 2014;

var colors = [ "red", "blue", "green" ];
console.log(colors[0]); // red

var colors = new Array("red", "blue", "green")
console.log(colors[0]);
