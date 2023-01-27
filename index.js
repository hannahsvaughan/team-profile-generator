//Application dependencies
const fs = require("fs");
const inquirer = require('inquirer');

const Questions = require("./lib/Questions");
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const htmlTemp = require("./src/template");

let teamArray = [];

const writeToFile = ( htmlTempArr ) => { 
    return new Promise (( resolve, reject ) => {
        outputFileName = teamArray[ 0 ].toLowerCase();

        fs.writeFile( `./dist/${outputFileName}.html`,join( ""), function (err) {
            if (err) {
                reject (err);
                return;
            };

            resolve( {
                ok: true,
                message: 'File created! Your output HTML file is located in the "dist" folder.'
            });
        });
    });
};

function generateHtmlFile () {
    const htmlTempArr = htmlTemp.generateHTML( htmlTempArr );
    writeToFile ( htmlTempArr );
};

function init() {
    inquirer.prompt([

        {
            message: "Welcome to the Team Profile Generator. Input your team name: ",
            name: "teamName",
            validate: teamNameInput => {
                if ( teamNameInput && teamNameInput.trim().length > 0 ) {
                    return true;
                }
                else {
                    console.log("Input your team name:");
                    return false;
                };
            }
        }
    ])
    .then( function (data) {
        const teamName = data.teamName;
        teamArray.push( teamName );
        addManagerProfile();
    });
};

init();

