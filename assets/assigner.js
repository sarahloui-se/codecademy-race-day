/* TODO:
- change logic flow to begin with an age check
- use variables for race time
*/

// Initial RNG
let raceNumber = Math.floor(Math.random() * 1000);

// Basic info
let earlyRegistration = false;
let runnerAge = 18;

// Assign race number
if (earlyRegistration === true) {
  raceNumber += 1000;
  //console.log(`Runner number is ${raceNumber}.`);
} else {
  //console.log(`Runner number is ${raceNumber}.`);
}

// Age check and inform race time
if (earlyRegistration === true && runnerAge > 18) {
  console.log(`You race at 9:30am. Your race number is ${raceNumber}.`);
} else if (earlyRegistration === false && runnerAge > 18) {
  console.log(`You race at 11:00am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You race at 12:30pm. Your race number is ${raceNumber}.`);
} else {
  console.log(`Your race number is ${raceNumber}. Please see the registration desk to be assigned your race time.`);
}