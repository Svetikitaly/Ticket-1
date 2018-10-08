
function C(username, email, password) {
  this.getUsername = () => console.log( username);
  this.getEmail = () => console.log( email );
  this.getPassword = () => console.log( password);
  this.getHashPassword = function() {
    var sha256 = require('js-sha256');
    console.log(sha256( password ));
  };
}


var c = new C('sveta', 'svettikomsk', '18121987m');
c.getHashPassword();
c.getPassword ();
