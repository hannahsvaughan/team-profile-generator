class Questions {
    constructor(role) {
        this.role = role
        this.menu = [
            {
                type: 'list',
                name: 'choice',
                message: 'Which type of employee would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'Or Finish Your Team'
                ]
            }
        ];
        this.questions = [
            {
                type: 'input',
                name: 'name',
                message: `What is your ${this.role}'s Name?`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter ${this.role}'s Name!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: `What is your ${this.role}'s employee ID?`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter ${this.role}'s employee ID!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: `What is your ${this.role}'s email address?`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter ${this.role}'s email address!`);
                        return false;
                    }
                }
            }]
    }
    getLastQuestion() {
        switch (this.role) {
            case "Manager":
                 this.questions.push({
                    type: 'input',
                    name: 'office',
                    message: "What is your Manager's office number?",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log("Please enter Manager's office number!");
                            return false;
                        }
                    }
                })
                return this.questions
                break;
            case "Engineer":
                this.questions.push({
                    type: 'input',
                    name: 'github',
                    message: "What is your Engineer's github username?",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log("Please enter Engieer's github!");
                            return false;
                        }
                    }
                })
                return this.questions
                break;
            default:
                this.questions.push({
                    type: 'input',
                    name: 'school',
                    message: "What is your Intern's school?",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log("Please enter Intern's school!");
                            return false;
                        }
                    }
                })
                return this.questions
                break;
        }
    }

}

module.exports = Questions