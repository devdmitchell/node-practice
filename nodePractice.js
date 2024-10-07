// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");


const firstName = getInput(1);
const lastName = getInput(2);


console.log(`Hello ${firstName} ${lastName}`);


const fullNameCapitalized = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(`${fullNameCapitalized} is your name capitalized.`);


const initials = `${firstName.charAt(0)}. ${lastName.charAt(0)}.`;
console.log(initials);


const emailAddress = `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}.prsvr@gmail.com`;
console.log(emailAddress);