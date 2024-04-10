//Q=1 Declare a variable named greeting with the string value "Hello, World!" and print it.
//let greeting; // Assign "Hello, World!" to this variable and print it.
let greeting: string = "hello, world";
console.log(greeting);
//Q=2 Define two variables with integer values and calculate their sum, difference, product, and quotient.
//let num1, num2; // Assign integer values and perform arithmetic operations
let num1: number = 10;
let num2: number = 5;
console.log("sum:", num1 + num2);
console.log("difference:", num1 - num2);
console.log("product:", num1 * num2);
console.log("qoutient:", num1 / num2);
//Q=3 Swap the values of two variables without using a third variable.
// Swap these values without using a new variable.
[num1, num2] = [num1, num2];
//after swaping
console.log("after swaping ,num1 is:", num2);
console.log("after swaping ,num2 is: ", num2);
//Q=4 This applies to TypeScript. Create a string variable and try changing its type.
let message = "123";
console.log(message);
//Q=5 Use the modulus operator to find the remainder of two numbers
let remainder = num1 % num2;
console.log("the remainder of ", num1, "divided by", num2, "is", remainder);
//Q=6 Increment a variable's value by 1 using two different methods.
//increment operator
let counter = 0;
//increment operator
counter++;
console.log(counter);
//assingnment operater
counter += 1;
console.log(counter);
//Q=7 Given three boolean variables, write expressions for AND, OR, and NOT gates.
let aa: boolean = true;
let bb: boolean = false;
let cc: boolean = true;
console.log("aa:", aa);
console.log("bb:", bb);
console.log("cc:", cc);
//AND GATE
console.log("AND gate result:", aa && bb && cc);
//OR GATE
console.log("OR gate result:", aa || bb || cc),
  //NOTE GATE
  console.log("NOT Gate result:", !cc);
//Q=8 Show examples of using compound assignment operators.
//let num = 10; // Use +=, -=, *=, and /= on this variable.
let num: number = 10;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);
//Q=9 Write a program to check if a number is even or odd.let num;
// Determine if this is even or odd.
let num4 = 6;
let result = num4 % 2;
if (result == 0) {
  console.log("even");
} else {
  console.log("odd");
}
//Q=10  Check if a person is eligible to vote.
//let age; // Check if age is 18 or older to determine voting eligibility.
let age: number = 18;
if (age >= 18) {
  console.log("you are eligible to vote.");
} else {
  console.log("you are not eligible to vote yet.");
}
//Q=11  Assign a grade based on a numerical score.
//let score; // Use conditionals to assign and print grades A, B, C, D, or F.
let score: number = 85;
if (score >= 90) {
  console.log("grade: A");
} else if (score >= 80) {
  console.log("grade: B");
} else if (score >= 70) {
  console.log("grade: C");
} else if (score >= 60) {
  console.log("grade: D");
} else {
  console.log("grade: F");
}
//Q 12 Find the maximum of three numbers.
let x, y, z; // Determine the largest among these.
let xx = 30;
let yy = 20;
let zz = 15;
let maxnumber = Math.max(xx, yy, zz);
console.log("the maximum number:", +maxnumber);
//Q 13  Check if a given year is a leap year.
//let year; // Determine if this is a leap year.
let year = 2024;
let isleapYear: boolean = false;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + "is a leap year");
} else {
  console.log(year + "is not a leap year");
}
//Q 14 Write a program that converts temperature from Fahrenheit to Celsius.
//let fahrenheit; // Convert this to Celsius and print the result.
let tempcelcius;
let tempfahrenheit = 68;
tempcelcius = ((tempfahrenheit - 32) * 5) / 9;
console.log(`tmperature in degree celcius is ${tempcelcius}`);
//Q 15 Check if a number is positive, negative, or zero.
//let number; // Determine the sign of this number.
let number = 0;
if (number > 0) {
  console.log("the number is positive");
} else if (number < 0) {
  console.log("the number is nagetive");
} else {
  console.log("the number is zero");
}
//Q 16Write a program that prints the multiplication table of a given number up to 10.
//let number; // Print the multiplication table for this number up to 10.
let table = 5;
console.log("5*1 =", 5 * 1);
console.log("5*2 =", 5 * 2);
console.log("5*3 =", 5 * 3);
console.log("5*4 =", 5 * 4);
console.log("5*5 =", 5 * 5);
console.log("5*6 =", 5 * 6);
console.log("5*7 =", 5 * 7);
console.log("5*8 =", 5 * 8);
console.log("5*9 =", 5 * 9);
console.log("5*10 =", 5 * 10);
