exports.install = function(framework) {
    framework.route('/users/view/{id}', action_get_info,['#categories']);
    framework.route('/users/edit/{id}', action_set_info, ['#categories','post']);

};

exports.uninstall = function(framework, options) {
    // Example: framework.uninstall('controller', name, [options]);
    // Is executed one time
    //@TODO make uninstall method
};

function action_get_info(id) {

    var self = this;

    var user = self.model('user');

    user.action_get_info(id, function(row) {
        self.view('user', row);
    })
    
}

function action_set_info(id) {

    var self = this;

    var model_set_info = self.model('user');

    var nume = self.post.nume;
    var prenume = self.post.prenume;
    var judet_id = self.post.judet_id;
    var oras = self.post.oras;

    model_set_info.setInfo(id, nume, prenume, judet_id, oras);

    self.view('edit');
}

