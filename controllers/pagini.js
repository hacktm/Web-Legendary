/**
 * Created by thunder on 10/19/14.
 */
exports.install = function(framework) {
    framework.route('/despre', action_despre,['#categories','#judete']);
    framework.route('/contact', action_contact,['#categories','#judete']);
    framework.route('/termeni-si-conditii', action_termeni,['#categories','#judete']);
    framework.route('/adauga-lucrare', action_add_lucrare,['#categories','#judete']);

};

exports.uninstall = function(framework, options) {
    // Example: framework.uninstall('controller', name, [options]);
    // Is executed one time
    //@TODO make uninstall method
};

function action_despre() {

    var self = this;

    self.view('despre');

}

function action_contact() {
    var self = this;
    self.view('contact');
}


function action_termeni() {
    var self = this;
    self.view('termeni');
}


function action_add_lucrare() {
    var self = this;
    self.view('add_lucrare');
}
