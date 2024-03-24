// Object representing a student's information
var student = {
    name: "Rushabh",
    age: 20,
    grade: "A",

    // Method to update the student's grade
    updateGrade: function(newGrade) {
        this.grade = newGrade;
        console.log("Student's grade updated to: " + this.grade);
    }
};

// Example usage:
console.log("Before update:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);

// Update the student's grade
student.updateGrade("B");

console.log("\nAfter update:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);
