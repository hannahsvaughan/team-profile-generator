const inquirer = require('inquirer');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const questions = require('./questions.js');
const { writeFile, copyFile } = require('../utils/generate-site.js');
const generateHTML = require('../src/template.js');


function Team() {
    this.employees = [];
}

//Starts the app and prompts questions about the manager
Team.prototype.initializeTeam = function() {
    inquirer.prompt(questions.Manager)
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
    inquirer.prompt(questions.Choice)
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

