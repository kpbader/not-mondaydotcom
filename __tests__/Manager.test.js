const Manager = require('../lib/Manager');

test('Gets manager office number', () => {
    const manager = new Manager("name", 34923452, "email", 7234529);

    expect(manager.officeNumber).toEqual(expect.any(Number))
    console.log("Office number is acceptable");
})