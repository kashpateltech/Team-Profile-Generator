const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager('kash', 2, 'kpat@abc.com', 2)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('get employee role', () => {
    const manager = new Manager('kash', 1, 'kp@abc.net', 2)
    expect(manager.getRole()).toEqual('Manager')
})

test('get office number', () => {
    const manager = new Manager('kash', 1, 'kp@abc.net', 2)
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
})