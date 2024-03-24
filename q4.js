// Function to check if an object has a specified property
function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}

// Example usage:
var obj1 = {a: 1, b: 2, c: 3};
var obj2 = {name: "Alice", age: 25, city: "New York"};

var propName1 = "b";
var propName2 = "email";

console.log("Does obj1 have the property '" + propName1 + "':", hasProperty(obj1, propName1));
console.log("Does obj1 have the property '" + propName2 + "':", hasProperty(obj1, propName2));
console.log("Does obj2 have the property '" + propName1 + "':", hasProperty(obj2, propName1));
console.log("Does obj2 have the property '" + propName2 + "':", hasProperty(obj2, propName2));
