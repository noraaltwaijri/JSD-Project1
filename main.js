json = (require('./data'));
var myJSON = JSON.parse(json);

//Write a function that console.logs each character object in the data.
let logData = function() {
    console.log(myJSON)
}
logData()

//Write a function that console.logs each character's name
let logNames = function() {
    for (let index = 0; index < myJSON.people.length; index++) {
        console.log(myJSON.people[index].name)
    }
}
logNames()

//Write a function that console.logs each character's name and eye color
let logNameEyes = function() {
    for (let index = 0; index < myJSON.people.length; index++) {
        console.log(myJSON.people[index].name  + ' , ' + myJSON.people[index].eye_color)
    }
}
logNameEyes()

//Write a function that console.logs each character's name whose mass is greater than 75
let logByMass = function() {
    for (let index = 0; index < myJSON.people.length; index++) {
        if (myJSON.people[index].mass > 75) {
            console.log(myJSON.people[index].name)
        }
    }
}
logByMass()