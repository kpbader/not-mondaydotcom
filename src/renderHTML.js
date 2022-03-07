
function teamHTML(teamArr) {


    function generateManagerCard(data) {
        return `
    <div id="manager-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.getName()}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Manager</h3> 
            <i class="fa-solid fa-briefcase"></i>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Office number: ${data.getOfficeNumber()}</li>
            <a class="list-group-item" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
        </div>
    </div>
    `
    }

    function generateEngineerCard(data) {
        return `
    <div id="engineer-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.getName()}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Engineer</h3> 
            <i class="fa-solid fa-laptop-code"></i>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <a class="list-group-item" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
            <a class="list-group-item" href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a>
        </div>
    </div>
    `
    }

    function generateInternCard(data) {
        return `
    <div id="intern-card" class="card">
        <div class="card-body">
            <h2 class="card-title">${data.getName()}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Intern</h3> 
            <i class="fa-solid fa-graduation-cap"></i>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">School: ${data.getSchool()}</li>
            <a class="list-group-item" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
        </div>
    </div>
    `
    }
    const team = [];

    //filter out the manager only from the team array
    team.push(teamArr.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerCard(manager)));

    //filter out the engineer only from the team array
    team.push(teamArr.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineerCard(engineer)));

    //filter out the intern only from the team array
    team.push(teamArr.filter(employee => employee.getRole() === "Intern").map(intern => generateInternCard(intern)));

    return team.join('');


};



module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width = device-width, initial-scale = 1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/f38c647ceb.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Employee Team</title>
    </head>

    <body>
        <header class="header-bar">
            <h1>Employee Team</h1>
         </header>

         <div id="cards" class="row mt-5 mb-5">
           ${teamHTML(team)}
         </div>
    
    </body>
    </html>
    `
}

