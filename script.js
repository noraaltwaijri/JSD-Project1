json = (require('./data')); 

/* 

Q1. Write a function to check if an array contains a particular number.

Examples

check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false

*/

// Solution
var arr  = [1,3,5,7]
function check(array,num) {
    var exist 
    for (let index = 0; index < array.length; index++) {
        if (array[index]==num) {
            exist = true
            break
        } else {
            exist = false
        }
    }
    console.log(exist)
}

check(arr,5)
check(arr,2)

/*
Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.

Examples

convertToSeconds(1, 3) ➞ 3780
convertToSeconds(2, 0) ➞ 7200
convertToSeconds(0, 0) ➞ 0
*/

//Solution

function convertToSeconds(hrs,min){
    var hrsToMin  = hrs*60
    min =+ hrsToMin 
    var sec = min*60
    console.log(sec)
}

convertToSeconds(1, 3)
convertToSeconds(2, 0)

/*
Q3. Use the following data to solve the problems below.

access the value of the capacityInGallons key
add 2 rocks to the numberOfRocks in the aquarium
access the clown fish and print the object.
access the size of the puffer fish.
your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
*/

//Solution

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
console.log(aquarium.capacityInGallons)
aquarium.numberOfRocks = aquarium.numberOfRocks+2
console.log(aquarium.numberOfRocks)
console.log(aquarium.fish[0])
console.log(aquarium.fish[1].size)
aquarium.fish[0].size = '4 inches'
console.log(aquarium.fish[0])
aquarium.fish[3] = { type: 'starfish', size: '5 inches', color: 'blue'}
console.log(aquarium.fish[3])



/*
Q4. The following JSON object has been provided to you in data.js:

This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

What to do?

3.Create a main.js file and write the following functions

Write a function that console.logs each character object in the data.
let logData = function() {
}
Write a function that console.logs each character's name
let logNames = function() {
};
Write a function that console.logs each character's name and eye color
let logNameEyes = function() {
};
Write a function that console.logs each character's name whose mass is greater than 75
let logByMass = function() {
};
*/

//Solution
//in main.js

/*
**Bonus Questions:

1. Write a function that takes in a parameter called num, and returns a random number between 0 and num. Look up documentation for Math.Random().

Examples

getRandomNum(6) ➞  returns a random number between 0 and 6
getRandomNumber(10) ➞ returns a random number between 0 and 10
2. A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100. Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

Examples
isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
isLeap(2000) ➞ true // Exactly divided by 400.
isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.
Notes

Exactly divided can be interpreted as the remainder of the division is equal to 0.
*/

//Solution
