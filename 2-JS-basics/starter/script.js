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
/*
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
*/

/******************
* Truthy and Falsy values and equality operators.
 */

// falsy values: undefined, null, 0, ``, NaN
// truthy values: NOT falsy values

/*
var height = 23;

if (height || height === 0) {
    console.log('Variable is defined.')
} else {
    console.log('Variable has NOT been defined.')
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/******************************
* CODING CHALLENGE
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the score to show different winners. Don't forget to take into account there might be a draw.
(the same average score.)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the
average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one,
just watch the solution, it's no problem.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK! :D
 */

/*
var johnTeamAverage = (89 + 120 + 103) / 3;
var mikeTeamAverage = (116 + 94 + 123) / 3;
var maryTeamAverage = (97 + 134 + 105) / 3;

if(johnTeamAverage > mikeTeamAverage && maryTeamAverage){
    console.log(`John's team wins in average score. Their total score is ${johnTeamAverage}`)
} else if (johnTeamAverage && mikeTeamAverage < maryTeamAverage) {
    console.log(`Mary's team wins in average score. Their total score is ${maryTeamAverage}`)
} else if (mikeTeamAverage > johnTeamAverage && maryTeamAverage) {
    console.log(`Mike's team wins in average score. Their total score is ${mikeTeamAverage}`);
} else {
    console.log(`They all have the same score.`)
}
*/

/***********************************
* Functions
 */

/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1989);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(calculateAge(30));
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*******************************************
* Function Statements and Expressions
 */

// function declaration
   // function whatDoYouDo (job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return `${firstName} teaches kids how to code`;
        case 'driver':
            return `${firstName} drives a cab in Lisbon`;
        case 'designer':
            return `${firstName} designs beautiful websites.`;
        default:
            return `${firstName} does something else.`
    }
};

console.log(whatDoYouDo('cop', 'John'));
*/

/**************************************`
* Arrays
 */

// Initialize new array

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher',
    false];

// add elements
john.push('blue');
john.unshift('Mr.');
console.log(john);

//remove elements
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*******************************************
 * CODING CHALLENGE 2
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $ 268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill
when it's between 50$ and $200, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK :D
 */

/*
var tip = function (price) {
    if(price < 50) {
        return (20 / 100) * price;
    } else if (price >= 50 && price < 200) {
        return (15 / 100) * price;
    } else {
        return (10 / 100) * price;
    }
};

bill = [124, 48, 268];
billTip = [tip(bill[0]), tip(bill[1]), tip(bill[2])];

billWithTip =[
    bill[0] + billTip[0],
    bill[1] + billTip[1],
    bill[2] + billTip[2]
];
console.log(billWithTip);
*/

/******************************************
* Objects and properties
 */

/*
// Object literal
var john = {
  firsName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firsName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************************
* Objects and methods
 */

/*
var john = {
  firsName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
   this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var mark = {
  firstName: 'Mark',
  lastName: 'Johnson',
  mass: 50,
  height: 1.9,
  markBMI: function() {
   this.bmi = this.mass / (this.height *= 2);
   return this.bmi
  }
};

var john = {
  firstName: 'John',
  lastName: 'Markson',
  mass: 60,
  height: 1.7,
  johnBMI: function() {
    this.bmi = this.mass / (this.height *= 2);
    return this.bmi
  }
};

mark.markBMI() > john.johnBMI() ? console.log(`${mark.firstName + ' ' + mark.lastName} has a higher BMI, sitting at ${mark.markBMI()}`) :
    console.log(`${john.firstName + ' ' + john.lastName} has a higher BMI, sitting at ${john.johnBMI()}`);
*/

/******************************
* Loops
 */

/*
// For Loops
for (var i = 0; i <= 20; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 , 10 true, log i to the console, i++
// ...
// i = 9, 1 < 10 true, log i to the console, i++
// i = 10, 1 < 10 false, exit the loop!

// While Loops
var i = 0;
while ( i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping Backwards
for (i = john.length-1; i >= 0; i--) {
  console.log(john[i]);
}