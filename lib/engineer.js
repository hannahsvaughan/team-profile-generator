const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }
    
    getGithub() {
        return this.gitHub;
    }
}

module.exports = Engineer;