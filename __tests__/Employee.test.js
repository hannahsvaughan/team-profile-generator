const Employee = require('../lib/employee');

console.log(new Employee());

test('create an employee object', () => {
    const employee = new Employee();

    expect(employee.name).tobe('John');
    expect(employee.id).toEqual(10);
    expect(employee.email).tobe('john@gmail.com');
});