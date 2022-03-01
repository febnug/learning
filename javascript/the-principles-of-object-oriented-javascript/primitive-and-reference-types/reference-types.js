function reflect(value) {
    return value;
}


console.log(typeof reflect); // "function"


var items = [];
var object = {};

console.log(items instanceof Array);        // true
console.log(object instanceof Object);       // true
console.log(reflect instanceof Function);   // true 
