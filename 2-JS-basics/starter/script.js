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

/*
markMass = 50;  //kg
johnMass = 60;
markHeight = 1.9; // meters
johnheight = 1.7;

markBMI = markMass / (markHeight *= 2);
johnBMI = johnMass / (johnheight *= 2);

// console.log(markBMI,johnBMI);
var comparison = (markBMI > johnBMI);

console.log(`Is Mark's higher than John's? ${comparison}`);
*/

/****************************
 If / else statements
 */

/*
var firstName = 'John';
var civilStatus ='single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

markMass = 50;  //kg
johnMass = 60;
markHeight = 1.9; // meters
johnheight = 1.7;

markBMI = markMass / (markHeight *= 2);
johnBMI = johnMass / (johnheight *= 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's.`)
} else {
    console.log(`John's BMI is higher than Mark's`)
}

// console.log(markBMI,johnBMI);
//var comparison = (markBMI > johnBMI);

//console.log(`Is Mark's higher than John's? ${comparison}`);
*/

/***********************************************
 * Boolean Logic
 */

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ` is a boy.`);
} else if(age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ` is a teenager.`)
} else if (age >= 20 && age < 30) {
    console.log(firstName + ` is a young man.`)
} else {
    console.log(firstName + ` is a man.`)
}
*/

/***************************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 14;

// Ternary operator.
age >= 18 ? console.log(firstName + ` drinks beer.`) : console.log(firstName + ` drinks juice.`);

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 30;
switch (true) {
    case age <= 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ` is a young man.`);
        break;
    default:
        console.log(firstName  + ` is a man`);

}


