/*****************************
* Variables and Data types
 */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;

console.log(job);

job = 'teacher';
console.log(job);
console.log(`${firstName + ' ' + lastName} is ${age}.`);

// Variable naming rules.
var _3years = 2;
var johnMark = 'John and Mark';
var ifNot = 23;
*/


//****************************************
/*
+ Variable mutation and type correction
 */

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);
console.log(`${firstName} is ${age}`);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(`${firstName} is ${age} year old ${job}. Is he married? ${isMarried}`);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(`${firstName} is ${age} year old ${job}. Is he married? ${isMarried}`);

var lastName = prompt('What is his last Name?');
console.log(`${firstName} ${lastName}`);
*/

/*******************************
* Basic operators.
*/

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;


// Math Operators
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// type operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*++++++++++++++++++++++++++++
* Operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = (now - yearJohn) >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators;
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);
 */

/**********************************
* CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher
than John's? true")

GOOD LUCK! :D
 */

markMass = 50;  //kg
johnMass = 60;
markHeight = 1.9; // meters
johnheight = 1.7;

markBMI = markMass / (markHeight *= 2);
johnBMI = johnMass / (johnheight *= 2);

// console.log(markBMI,johnBMI);
var comparison = (markBMI > johnBMI);

console.log(`Is Mark's higher than John's? ${comparison}`);