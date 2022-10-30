const myAge = 25;
let earlyYears = 2; // set earlyYears to 2. This value is changable
earlyYears = earlyYears * 10.5;

console.log(earlyYears);

// myAge = myAge - 2; // set myAge to myAge - 2. This value is not changable
let laterYears = myAge; // set laterYears to myAge. This value is changable
laterYears = laterYears * 4; // set laterYears to laterYears * 4. This value is changable
console.log(earlyYears);
console.log(laterYears);
console.log(earlyYears + laterYears);

let myAgeInDogYears = earlyYears + laterYears; // set myAgeInDogYears to earlyYears + laterYears. This value is changable
console.log(myAgeInDogYears);

//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = "Phillip".toLowerCase();
console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years in human years which is ${myAgeInDogYears} old in dog years.`);

// Print out the statement: "My name is NAME. I am HUMAN AGE years old in human years which
//
// The toLowerCase method returns a string with all lowercase letters.
//
// Write a comment that explains this line of code.