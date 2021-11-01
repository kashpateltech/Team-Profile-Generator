const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('kash', 1, 'kp@abc.net')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

test('get employee ID', () => {
    const employee = new Employee('kash', 1, 'kp@abc.net')
    expect(employee.getId()).toEqual(expect.any(Number))
})

test('get employee email', () => {
    const employee = new Employee('kash', 1, 'kp@abc.net')
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test('get employee role', () => {
    const employee = new Employee('kash', 1, 'kp@abc.net')
    expect(employee.getRole()).toEqual("Employee")
})