const { default: inquirer } = require('inquirer');
const Team = require('./lib/team');
const Questions = require("./lib/Questions")
// Function to initalize the app
new Team().initializeTeam();

inquirer.prompt(new Questions("Manager").getLastQuestion())