
function C(username, email, password) {
    var sha256 = require('js-sha256');
    this.getHashPassword = function() {
        console.log(sha256( password ));
      };
}


var c = new C('sveta', 'svettikomsk', '18121987m');
c.getHashPassword();
