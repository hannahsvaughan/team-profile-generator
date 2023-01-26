const { expect } = require('expect');
const Engineer = require('../lib/Engineer');

console.log(new Engineer());

test('create an engineer object', () => {
    const engineer = new Engineer('Jane', 20, 'jane@gmail.com', 'janedoe01');

    expect(engineer.name).toBe('Jane');
    expect(engineer.id).toEqual(20);
    expect(engineer.email).toBe('jane@gmail.com');
    expect(engineer.gitHub).toBe('janedoe01')
});

test("get an engineer's Github", () => {
    const engineer = new Engineer('Jane', 20, 'jane@gmail.com', 'janedoe01');

    expect(engineer.getGithub()).toBe('janedoe01');
});

test("get an engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.role).toBe('Engineer');
});