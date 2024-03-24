
function calculateCircleArea(radius) {

    var area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage:
var radius = 5;
var area = calculateCircleArea(radius);
console.log("The area of the circle with radius", radius, "is:", area.toFixed(2));
