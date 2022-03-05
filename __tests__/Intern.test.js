const Intern = require('../lib/Intern');

test('Gets school for intern', () => {
    const intern = new Intern("name", 323542, "email", "school");

    expect(intern.school).toEqual(expect.any(String));
    console.log("School is acceptable");
})