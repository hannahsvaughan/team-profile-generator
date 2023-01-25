const Employee = require('../lib/employee');

console.log(new Employee());

test('create an employee object', () => {
    const employee = new Employee();

    expect(employee.name).tobe('Test');
    expect(employee.id).toEqual(-1);
    expect(employee.email).tobe('test@gmail.com');
});