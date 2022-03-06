const path = require('path');
const fs = require('fs');

function teamHTML(teamArr) {
    team = [];

    for (let i = 0; i < teamArr.length; i++) {
        const employee = teamArr[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);
            team.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            team.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateInternCard(employee);
            team.push(internCard);
        }
    }


};

function mainHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en"

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width = device-width, initial-scale = 1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Employee Team</title>
    </head>

    <body>
        <header class="header-bar">
            <h1>Employee Team</h1>
         </header>

         <div id="cards">
            <!-- CARDS HERE -->
         </div>
    
    </body>
    </html>
    `
}

function generateManagerCard() {
    return `
    <div id="manager-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.managerName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
            <li class="list-group-item">ID: ${data.managerId}</li>
            <li class="list-group-item">Email: ${data.managerEmail}</li>
            <li class="list-group-item">Office number: ${data.managerOfficeNumber}</li>
        </div>
    </div>
    `
}

function generateEngineerCard() {
    return `
    <div id="engineer-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.engineerName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>
            <li class="list-group-item">ID: ${data.engineerID}</li>
            <li class="list-group-item">Email: ${data.engineerEmail}</li>
            <li class="list-group-item">Github: ${data.engineerGithub}</li>
        </div>
    </div>
    `
}

function generateInternCard() {
    return `
    <div id="intern-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.internName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Intern</h3>
            <li class="list-group-item">ID: ${data.internID}</li>
            <li class="list-group-item">Email: ${data.internEmail}</li>
            <li class="list-group-item">School: ${data.internGithub}</li>
        </div>
    </div>
    `
}

module.exports = teamHTML;