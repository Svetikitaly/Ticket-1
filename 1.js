
var sha256 = require('js-sha256');

function C(username, email, password) {
    this.getUsername = () =>  username;
    this.getEmail = () =>  email ;
    this.getPassword = () =>  password ;
    this.getHashPassword = () => _getHashPassword();
    
    function _getHashPassword () {
    return sha256( password ) ;
  };
}

module.exports = C;
