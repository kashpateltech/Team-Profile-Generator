const Engineer = require('../lib/Engineer');


test('creates an Engineer Object', () => {
    const engineer = new Engineer('kash', 2, 'kpat@abc.com', 'kashtech')
    expect(engineer.github).toEqual(expect.any(String))
})

test('get employee role', () => {
    const engineer = new Engineer('kash', 1, 'kp@abc.net', 'kashtech')
    expect(engineer.getRole()).toEqual('Engineer')
})

test('github', () => {
    const engineer = new Engineer('kash', 1, 'kp@abc.net', 'kashtech')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})