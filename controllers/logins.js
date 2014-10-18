exports.install = function(framework) {
    framework.route('/login', action_login,['post']);
    framework.route('/register', action_register);
    framework.route('/recover-password', action_recover_password);

};

exports.uninstall = function(framework, options) {
    // Example: framework.uninstall('controller', name, [options]);
    // Is executed one time
    //@TODO make uninstall method
};

function action_login() {

    var self = this;

    var email = self.post.email;
    var pass  = self.post.pass;
    
    if(!self.session.user)
   	{
	    var model_login = self.model('login');
	    model_login.authenticate(email,pass,function(user){    	
	    	self.session.user = user;
	    	self.view('login',self.session.user);		

	    });    
	    console.log('no auth');
	}
    
    self.view('login',self.session.user);
    
}

function action_register(hash) {
    var self = this;

}


function action_recover_password(hash) {
    var self = this;

}