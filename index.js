const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamArr = [];


function enterTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamRole',
            message: 'What team role/member would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern']

        },
        {
            when: (data) => data.teamRole === 'Manager',
            type: 'input',
            name: 'managerName',
            message: 'Enter Manager Name',
            // validate: answer => answer ? true : "Please enter valid name."
        },
        {
            when: (data) => data.teamRole === 'Manager',
            type: 'number',
            name: 'managerId',
            message: 'Enter Manager ID',
            // validate: answer => {
            //     if (answer < 0 || NaN) {
            //         console.log('Please enter a valid number.')
            //         return false;
            //     }
            //     return true;
            // },
        },
        {
            when: (data) => data.teamRole === 'Manager',
            type: 'input',
            name: 'managerEmail',
            message: 'Enter Manager Email'
            // validate: answer => {
            // 
        },
        {
            when: (data) => data.teamRole === 'Manager',
            type: 'number',
            name: 'managerOfficeNumber',
            message: 'Enter Manager office number.',
            // validate: answer => {
            //     if (answer < 0 || NaN) {
            //         console.log('Please enter a valid number.')
            //         return false;
            //     }
            //     return true;
            // }
        },
        {
            when: (data) => data.teamRole === 'Engineer',
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?',
        },
        {
            when: (data) => data.teamRole === 'Engineer',
            type: 'number',
            name: 'engineerID',
            message: 'What is the ID of the engineer?',
        },
        {
            when: (data) => data.teamRole === 'Engineer',
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of the engineer?',
        },
        {
            when: (data) => data.teamRole === 'Engineer',
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the github name of the engineer?'
        },
        {
            when: (data) => data.teamRole === 'Intern',
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern?'
        },
        {
            when: (data) => data.teamRole === 'Intern',
            type: 'number',
            name: 'internID',
            message: 'What is the ID of the intern?'
        },
        {
            when: (data) => data.teamRole === 'Intern',
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of the intern?'
        },
        {
            when: (data) => data.teamRole === 'Intern',
            type: 'input',
            name: 'internSchool',
            message: 'What is the school of the intern?'
        },
         {
            type: 'list',
            name: 'newTeamMember',
            message: 'Would you like to add another team member?',
            choices: ["Yes", "No"]
        },

    ]).then(data => {

        if (data.role === 'Manager') {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArr.push(manager);
        }
        if (data.role === 'Engineer') {
            const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
            teamArr.push(engineer);
        }
        if (data.role === 'Intern') {
            const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
            teamArr.push(intern);
        }
        if (data.newTeamMember === 'Yes') {
            return enterTeam()
        } else {
            console.log(teamArr);
            return teamArr;
        }
    })

}
enterTeam();