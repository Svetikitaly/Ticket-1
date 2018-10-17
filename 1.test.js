var C = require('./1');
var assertEqual = require('assert-equal')
describe('test', () => {
  var c = new C('sveta', 'svettikomsk', '18121987m');
  it('user name', () => {
    assertEqual(c.getUsername(), 'sveta');
  });
  it('email', () => {
    assertEqual(c.getEmail(), 'svettikomsk');
  });
  it('password', () => {
    assertEqual(c.getPassword(), '18121987m');
  });
});
