exports.install = function(framework) {
    framework.route('/login', action_login,['#categories','#judete']);
    framework.route('/login', action_login,['#categories','#judete','post']); // s-ar putea sa avem nevoie de xhr
    framework.route('/register', action_register,['#categories','#judete']);
    framework.route('/register', action_register,['#categories','#judete','post']); // s-ar putea sa avem nevoie de xhr
    framework.route('/recover-password', action_recover_password,['#categories','#judete']);

};

exports.uninstall = function(framework, options) {
    // Example: framework.uninstall('controller', name, [options]);
    // Is executed one time
    //@TODO make uninstall method
};

function action_login() {

    /************************************
     * @TODO:
     * - de facut un midleware sau ceva pt a sanitiza valorile venite din post,get,put etc
     *
     *************************************/
    var self = this;

    var email = self.post.email;
    var pass  = self.post.pass;

    if(!self.session.user)
    {
        var model_login = self.model('login');
        if(model_login)
            model_login.authenticate(email,pass,function(user){
                self.session.user = user;
                self.view('login',self.session.user);

            });
    }
    else
    {
        self.view('login',self.session.user);
    }

}

function action_register() {
    var self = this;

    var params ={
        email : self.post.email,
        pass  : self.post.pass,
        type  : self.post.type
    }

    var model_login = self.model('login');
    model_login.register(params,function(resp){

        //@TODO de facut trimitere de mail pt validare
        self.view('register',resp);

    });
}


function action_recover_password() {
    var self = this;
    var email = self.post.email;

    var model_login = self.model('login');
    model_login.recover_password(email,function(resp){

        //@TODO de facut trimitere de mail pt recuperare parola daca vine resp cu success
        self.view('recover-password');

    });
}