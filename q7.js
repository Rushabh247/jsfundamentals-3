
var userMap = new Map();


function addUserRecord(name, age, email) {
    if (!userMap.has(name)) {
        userMap.set(name, { age: age, email: email });
        console.log("User record added successfully.");
    } else {
        console.log("User with name '" + name + "' already exists. Please use update function to modify the record.");
    }
}

function updateUserRecord(name, age, email) {
    if (userMap.has(name)) {
        userMap.set(name, { age: age, email: email });
        console.log("User record updated successfully.");
    } else {
        console.log("User with name '" + name + "' does not exist.");
    }
}

// Function to delete a user record from the Map
function deleteUserRecord(name) {
    if (userMap.has(name)) {
        userMap.delete(name);
        console.log("User record deleted successfully.");
    } else {
        console.log("User with name '" + name + "' does not exist.");
    }
}

// Function to display all user records in the Map
function displayAllUserRecords() {
    console.log("User Records:");
    userMap.forEach(function(value, key) {
        console.log("Name:", key, "Age:", value.age, "Email:", value.email);
    });
}

// Example
addUserRecord("Rushabh", 25, "alice@example.com");
addUserRecord("bill", 30, "bill@example.com");
addUserRecord("Rushabh", 28, "aliceupdated@example.com"); 
updateUserRecord("Bill", 32, "bobupdated@example.com");
deleteUserRecord("Rushabh");
displayAllUserRecords();
