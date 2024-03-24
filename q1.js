// Object representing a car
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Function to display all properties of the car
function displayCarProperties(carObj) {
    for (var property in carObj) {
        console.log(property + ": " + carObj[property]);
    }
}

// Display all properties of the car
console.log("Car Properties:");
displayCarProperties(car);
