exports.install = function(framework) {
    framework.route('/', view_homepage,['#categories']);

    framework.use('session');
};

function view_homepage() {
    var self = this;
    self.view('homepage');

}