const Employee = require("../lib/Employee");

const generateCards = function (employees) {
    var cards = [];

    employees.forEach(employee => {
        var roleInfo = ``;
        var roleIcon = "";
        //manager
        if (employee.role == 'Manager') {
            roleInfo = `<li><p>Office Number: ${employee.officeNumber}</p></li>`;
            roleIcon = "oi oi-clipboard";
        }
        //engineer

        if (employee.role == 'Engineer') {
            roleInfo = `<li class="d-flex"><p>GitHub:</p><a href="https://github.com/${employee.gitHub}" target="_blank">${employee.gitHub}</a></li>`
            roleIcon = "oi oi-monitor"
        }

        //intern
        if (employee.role == 'Intern') {
            roleInfo = `<li><p>School: ${employee.school}</p></li>`
            roleIcon = "oi oi-book"
        }

        let card = `     
        <div class="card shadow">
        <div class="card-header">
            <h1>Name</h1>
            <h2><span class="oi oi-clipboard"></span>Manager</h2>
        </div>
        <div class="card-body align-middle">
            <ul><li>
                    <p>ID: ${employee.id}</p>
                </li>
                <li class="d-flex">
                    <p>Email:</p>
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </li >
                ${roleInfo}
            </ul >
        </div >
    </div >
    `;
        cards = cards + card;
    });
    return cards;
}

const generateHTML = function (employeesData) {
    const manager = employeesData.filter(employeesData => employeesData.role === 'Manager');
    const engineer = employeesData.filter(employeesData => employeesData.role === 'Engineer');
    const intern = employeesData.filter(employeesData => employeesData.role === 'Intern');
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap" rel="stylesheet">
        <link href="./style.css" rel="stylesheet">
    
        <title>My Team</title>
    </head>
    
    <body>
        <header class="d-flex justify-content-center shadow">
            <h1> My Team</h1>
        </header>
        <main class="d-flex flex-wrap justify-content-center">
        ${generateCards(manager)};
        ${generateCard(engineer)};
        ${generateCards(intern)};
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = generateHTML;