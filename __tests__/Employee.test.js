const Employee = require('../lib/Employee');

test('Gets employee name', () => {
    const employee = new Employee("name")

    expect(employee.name).toEqual(expect.any(String))
    console.log("Name is acceptable");
}) 

test('Gets employee ID', () => {
    const employee = new Employee("kyle", 85643)

    expect(employee.id).toEqual(expect.any(Number))
    console.log("ID acceptable")
})

test('Gets employee email', () => {
    const employee = new Employee("kyle", 85643, "email@gmail.com")

    expect(employee.email).toEqual(expect.any(String));
    console.log("Email acceptable")
})

// test('Gets employee role', () => {
//     const employee = new Employee("kyle", 85643, "email@gmail.com", "role")

//     expect(employee.role).toEqual(expect.any(String))
// })