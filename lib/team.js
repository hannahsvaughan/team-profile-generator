const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Questions = require('./Questions.js');
const { writeFile, copyFile } = require('../utils/generate-site.js');
const generateHTML = require('../src/template.js');

class TeamTwo {
    constructor(){
        this.employees = []
    }
    initializeTeam(){
        inquirer.prompt(new Questions("Manager").getLastQuestion())
        .then(answers => {
            this.employees.push(new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office
            ));
            this.addTeamMember();
        })
        .catch((error) => {
            console.log(error);
        })
    }
    addTeamMember(){
        console.log("Adding team member")
    }
}

function Team() {
    this.employees = [];


}

//Starts the app and prompts questions about the manager
Team.prototype.initializeTeam = function() {
    inquirer.prompt(new Questions("Manager").getLastQuestion())
    .then(answers => {
        this.employees.push(new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOffice
        ));
        this.addTeamMember();
    })
    .catch((error) => {
        console.log(error);
    });
};

//Prompts first question on whether to add engineer, intern, or finish the app
Team.prototype.addTeamMember = function () {
    inquirer.prompt(new Questions().menu)
    .then(answer => {
        if (answer.choice == 'Engineer') {
            this.addEngineer();
            return;
        } else if (answer.choice == 'Intern') {
            this.addIntern();
            return;
        } else {
            this.generateSite();
        }
    });
};

//Prompts questions about the engineer
Team.prototype.addEngineer = function () {
    inquirer.prompt(questions.Engineer)
    .then(answers => {
        this.employees.push(new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
        ));
        this.addTeamMember();
    });
};


//Prompts questions about the Intern
Team.prototype.addIntern = function () {
    inquirer.prompt(questions.Intern)
    .then(answers => {
        this.employees.push(new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        ));
        this.addTeamMember();
    });
};

Team.prototype.generateSite = function () {
    let pageHTML = generateHTML(this.employees);
    writeFile('./dist/index.html', pageHTML);
    console.log('index.html created!');
    copyFile();
    console.log('style.css copied!');
};

module.exports = Team;

