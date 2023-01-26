const Intern = require('../lib/intern');

const intern = new Intern('Jane', 20, 'jane@gmail.com', 'uga');

test('create an intern object', () => {
    // const intern = new Intern('Jane', 20, 'jane@gmail.com', 'uga');

    expect(typeof intern).toBe("object");
    expect(intern.name).toBe('Jane');
    expect(intern.id).toEqual(20);
    expect(intern.email).toBe('jane@gmail.com');
    expect(intern.school).toBe('uga');
});

test("get an intern's school", () => {
    // const intern = new Intern('Jane', 20, 'jane@gmail.com', 'uga');
    expect(intern.getSchool()).toBe('uga');
})

test("get an intern's role", () => {
    // const intern = new Intern();
    expect(intern.getRole()).toBe('Intern');
});