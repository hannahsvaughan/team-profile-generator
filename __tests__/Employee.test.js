const Employee = require('../lib/Employee');

const employee = new Employee("John", 10, "john@gmail.com");

test('create an employee object', () => {
    expect(typeof employee).toBe("object")
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(10);
    expect(employee.email).toBe('john@gmail.com');
});

test('Class employee has property name', () => {
    expect(employee.name).toBe('John');
});

test('Class employee has method that returns name', () => {
    expect(employee.getName()).toBe('John');
});