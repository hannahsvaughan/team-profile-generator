function Employee() {
    this.name = 'John';
    this.id = 10;
    this.email = 'john@gmail.com';
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function(assignedRole) {
    if(assignedRole == '') {
        return this.role = 'Employee';
    } 
    return this.role = '';
};

module.exports = Employee;