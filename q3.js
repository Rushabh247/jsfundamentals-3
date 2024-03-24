// Function to count the number of properties in an object
function countProperties(obj) {
    var count = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            count++;
        }
    }
    return count;
}

// Example usage:
var obj1 = {a: 1, b: 2, c: 3};
var obj2 = {name: "Rushabh", age: 20, city: "INDIA"};

console.log("Number of properties in obj1:", countProperties(obj1));
console.log("Number of properties in obj2:", countProperties(obj2));
