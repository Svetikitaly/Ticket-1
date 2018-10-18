var C = require('./6');
var assertEqual = require('assert-equal' ), sha256 = require('js-sha256');

describe('test', () => {
 var test_name = 'sveta', test_email = 'svettikomsk', test_password = '18121987m', test_iter_count = 7;
 var c = new C( test_name, test_email, test_password, test_iter_count);
    it('user name', () => {
      assertEqual(c.getUsername(), test_name);
  });
  it('email', () => {
      assertEqual(c.getEmail(), test_email);
  });
  it('password', () => {
      assertEqual(c.getPassword(), test_password);
  });
  it('Hash Password', () => {
      var test_hash = sha256( test_password ) ;
      for (i = 0; i < ( test_iter_count - 1 ); i++) { 
        test_hash = sha256( test_hash ) ;
      }
      assertEqual(c.getHashPassword(), test_hash);
  });
});
