var object = new Object();



//deferencing objects
//var object1 = new Object();

// do something

//object1 = null;

// adding or removing properties
var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty); // "Awesome!"
