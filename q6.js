// Function to reverse a string
function reverseString(inputString) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return inputString.split('').reverse().join('');
}

// Example usage:
var inputString = "PWSKILLS";
var reversedString = reverseString(inputString);
console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);
