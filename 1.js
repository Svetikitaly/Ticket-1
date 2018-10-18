var sha256 = require('js-sha256');

function C(username, email, password, iter_count) {
    this.getUsername = () =>  username;
    this.getEmail = () =>  email ;
    this.getPassword = () =>  password ;
    this.getHashPassword = () => _getHashPassword();
    
    function _getHashPassword () {
      var hash = sha256( password ) ;
      for (i = 0; i < ( iter_count - 1 ); i++) { 
        hash = sha256( hash ) ;
      }
      return hash ;
  };
}

module.exports = C;
