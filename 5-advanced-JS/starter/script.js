// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1900,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2016 -this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();
var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);


