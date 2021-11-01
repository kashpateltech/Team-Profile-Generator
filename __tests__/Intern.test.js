const Intern = require('../lib/Intern');


test('creates an Intern Object', () => {
    const intern = new Intern('kash', 2, 'kpat@abc.com', 'UWS')
    expect(intern.school).toEqual(expect.any(String))
})

test('get employee role', () => {
    const intern = new Intern('kash', 1, 'kp@abc.net', 'UWS')
    expect(intern.getRole()).toEqual('Intern')
})

test('school', () => {
    const intern = new Intern('kash', 1, 'kp@abc.net', 'UWS')
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})