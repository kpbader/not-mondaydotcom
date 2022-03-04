const Employee = require('./Employee');

class Intern extends Employee {
    // school, getSchool(), getRole()....overridden to return 'intern'
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // school = school;

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;