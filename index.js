const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function enterTeam() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'managerName', 
        message: 'Enter Manager Name',
        validate: answer => {
            if (answer === "") {
                console.log('Please enter a valid name.');
                return false;
            }
            return true;
        },
    
        type: 'number',
        name: 'managerId',
        message: 'Enter Manager ID',
        validate: answer => {
            if (answer < 0) {
                console.log('Please enter a valid number.')
                return false;
            }
            return true;
        },

        type: 'input',
        name: 'managerEmail',
        message: 'Enter Manager Email',
        validate: answer => {
            // 
        },

        type: 'number',
        name: 'managerOfficeNumber',
        message: 'Enter Manager office number.',
        validate: answer => {
            if (answer < 0) {
                console.log('Please enter a valid number.')
                return false;
            }
            return true;
        }
    
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

    })

}