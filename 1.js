
function C(username, email, password) {
    this.getUsername = () => console.log( username);
    this.getEmail = () => console.log( email );
    this.getPassword = () => console.log ( password );
    this.getHashPassword = function() {
      return _getHashPassword();
    } 
  
    var sha256 = require('js-sha256');
  
    function _getHashPassword () {
    console.log( sha256( password ) );
  };
}


var c = new C('sveta', 'svettikomsk', '18121987m');
c.getHashPassword ();
