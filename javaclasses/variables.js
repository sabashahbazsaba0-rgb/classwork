//arthematics Operators//
let a=10;
var b = 9;
let c = 8;
let sum = a + b + c;
console.log(sum);
console.log("This is user information:");
var studentName = "Saba";
var $studentAge = 18;
var _studentCity = "Narowal";
var studentroll="216"
const country = "Pakistan";
let Country = "Narowal";
let _id = 12345;
document.writeln("<p>Student Name: " + studentName + "<br></p>");
document.writeln("Student Age: " + $studentAge + "<br>");
document.writeln("Student roll number:"+studentroll+"<br>")
document.writeln("Student City: " + _studentCity + "<br>");
document.writeln("Country: " + country + "<br>");
document.writeln("Student ID: " + _id + "<br>");
console.log(studentName);
console.log($studentAge);
console.log(_studentCity);
console.log(studentroll);
console.log(country);
console.log(Country);
console.log(_id);
console.log("These are the operators in JavaScript:");
let x = 5;
x = +5;
document.writeln("The value of x is: " + x + "<br>");
let y = 10;
y = -y;
document.writeln("The value of y is: " + y + "<br>");
let X = 5;
X += 3;
document.writeln(X + "<br>");
let Y = 10;
Y -= 5;
document.writeln(Y + "<br>");
console.log("Equality operator:");
let a2 = 10;
let b2 = "10";
console.log(a2 == b2);
console.log("Identity operator:");
console.log(a2 === b2);
//conditional statements//
console.log("Conditional statements:");
console.log("AND statement");
let age = 20;
if (age > 18 && age < 30 && age != 25) {
    console.log("You are eligible for this course.");
}
else {
    console.log("You are not eligible for this course.");
}
console.log("OR statement");
let agee = 50;
if (agee > 18 || agee < 60 || agee != 60) {
    console.log("You are eligible for this course.");
}
else {
    console.log("You are not eligible for this course.");
}
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
}
//switch statement//
console.log("Switch statement:");
let length = 10;
switch (length) {
    case 5:
        console.log("Length is 5.");
        break;
    case 10:
        console.log("Length is 10.");
        break;
    case 15:
        console.log("Length is 15.");
        break;
    default:
        console.log("Length is not 5, 10, or 15.");
}
console.log("Grade calculation function:");
/**
 * Calculates the letter grade for a given score.
 * @param {number} score The student's numerical score (0-100).
 * @returns {string} The corresponding letter grade (A, B, C, D, or F).
 */
function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
// Example usage://
console.log("This is the grade calculation function:");
const studentScore = 88;
const studentGrade = calculateGrade(studentScore);
console.log(`Student score: ${studentScore}`);
console.log(`Student grade: ${studentGrade}`);
getGrade(88);
function getGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}