// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04
var mathematics = 75;
var biology = 25;
var physics = 65;
var chemistry = 80;
var bangla = 35;
var english = 45;
var economic = 99;
var islmicHistory = 50;
var totalAddition = mathematics + biology + physics + chemistry + bangla + english + economic + islmicHistory;
var averages = totalAddition / 8;
console.log(averages);
