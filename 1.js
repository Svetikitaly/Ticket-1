<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src ="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.0.1/progressbar.min.js"></script>
        <title>Welcome!</title>
    </head>
    <body>
        
        <div class="container" style="margin-top:20px;">
            
            <form>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label" for="username">Username</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="username">
                    </div>
                </div>
                   
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label" for="email">Email</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="email">
                    </div>
                </div>
                
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label" for="password">Password</label>
                    <div class="col-sm-9">
                        <input type="password" class="form-control" id="password">
                    </div>
                </div>
                
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label" for="number_of_hash_iteration">number of hash iteration</label>
                    <div class="col-sm-9">
                        <input type="number" min="1" class="form-control" id="number_of_hash_iteration">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-9 offset-sm-3">
                        <button type="submit" class="btn btn-primary">show hash of password</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 offset-sm-3" style="margin-top:20px;">
                        <div class="progress progress-striped active" >
                          <div class="progress-bar progress-bar-success" style="width:0%"></div>
                        </div>
                    </div>
                </div>
                
            </form>

           
            
            
        </div>

        <script>
             function _getHashPassword (pass,iter) {
                        var hash = sha256( pass ) ;
                       // var value = $( ".selector" ).progressbar( "option", "value" );
                        var val = 0;
                        for (i = 0; i < ( iter ); i++) { 
                            hash = sha256( hash ) ;
                            val = ( i + 1 )/ iter * 100;
                            console.log( val);
                           // $( ".selector" ).progressbar( "option", "value", val );
                           $(".progress-bar").animate({
                             width: val+"%"
                            }, );
                        }
                        return hash;
                    };
                    
             $( "button" ).click(function() {
                 var passwordValue = $( "#password" ).val();
                 var iterCountValue = $( "#number_of_hash_iteration" ).val(); 
                 
                 alert("hash of password is " + _getHashPassword(passwordValue, iterCountValue));

                 return false;
            });
        </script>

    </body>
</html>
