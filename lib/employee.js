// function Employee() {
//     this.name = 'John';
//     this.id = 10;
//     this.email = 'john@gmail.com';
// };

// Employee.prototype.getName = function() {
//     return this.name;
// };

// Employee.prototype.getId = function() {
//     return this.id;
// };

// Employee.prototype.getEmail = function() {
//     return this.email;
// };

// Employee.prototype.getRole = function(assignedRole) {
//     if(assignedRole == '') {
//         return this.role = 'Employee';
//     } 
//     return this.role = '';
// };


class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name;
    };
    
    getId () {
        return this.id;
    };
    
    getEmail () {
        return this.email;
    };
    getRole(){
        return "Employee"
    }

}


module.exports = Employee;