const Manager = require('../lib/manager');

const manager = new Manager('Jane', 20, 'jane@gmail.com', 101);
// console.log(new Manager());

test('create a manager object', () => {
    // const manager = new Manager('Jane', 20, 'jane@gmail.com', 101);
    expect(typeof manager).toBe("object");
    expect(manager.name).toBe('Jane');
    expect(manager.id).toEqual(20);
    expect(manager.email).toBe('jane@gmail.com');
    expect(manager.officeNumber).toBe(101);
});

test("get a manager's role", () => {
    // const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
});