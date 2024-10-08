// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)

const fullName = (firstName + " " + lastName)
console.log("Hello " + fullName)
let capitalName = fullName.toUpperCase()
console.log(capitalName)
const initials = firstName [0] + ". " + lastName[0] + ". "
console.log(initials)
const email = firstName [0] + lastName + ".prsvr@gmail.com"
console.log(email)