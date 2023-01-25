const Intern = require('../lib/intern');

console.log(new Intern());

test('create an intern object', () => {
    const intern = new Intern('Jane', 20, 'jane@gmail.com', 'uga');

    expect(intern.name).toBe('Jane');
    expect(intern.id).toEqual(20);
    expect(intern.email).toBe('jane@gmail.com');
    expect(intern.school).toBe('uga');
});

test("get an intern's school", () => {
    const intern = new Intern('Jane', 20, 'jane@gmail.com', 'uga');

    expect(intern.getSchool()).toBe('uga');
})

test("get an intern's role", () => {
    const intern = new Intern();

    expect(intern.role).toBe('Intern');
});