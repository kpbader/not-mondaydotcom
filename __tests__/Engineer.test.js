const Engineer = require('../lib/Engineer');

test('Gets Github link', () => {
    const engineer = new Engineer("name", 38357, "example@email.com", "github id");

    expect(engineer.github).toEqual(expect.any(String));
})