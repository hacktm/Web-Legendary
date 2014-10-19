exports.install = function(framework) {

    framework.route('/mesteri/view/{id}', action_get_info,['#categories','#judete']);
    framework.route('/mesteri/edit/{id}', action_set_info, ['#categories','#judete','post']);
    framework.route('/mesteri/view-all', action_view_all,['#categories','#judete']);
    framework.route('/mesteri/view-all/{judet_id}', action_view_all, ['#categories','#judete','get']);
    framework.route('/mesteri/view-all/{judet_id}/{domeniu_id}', action_view_all, ['#categories','#judete','get']);



};

exports.uninstall = function(framework, options) {
    // Example: framework.uninstall('controller', name, [options]);
    // Is executed one time
    //@TODO make uninstall method
};

function action_get_info(id) {

    var self = this;

    var mester = self.model('mester');

    mester.getInfo(id, function(row) {
        console.log(row);
        self.view('mester', row);

    })
    
}

function action_set_info(id) {

    var self = this;

    var model_set_info = self.model('mester');

    var nume = self.post.nume;
    var prenume = self.post.prenume;
    var descriere = self.post.descriere;
    var judet_id = self.post.judet_id;
    var oras = self.post.oras;
    var telefon = self.post.telefon;

    model_set_info.setInfo(id, nume, prenume, descriere, judet_id, oras, telefon);

    self.view('edit');
}

function action_view_all(judet_id, domeniu_id) {

    var self = this;

    var mester = self.model('mester');
    var params = {};

    if (judet_id) {
        params.judet_id = judet_id;
    }
    if (domeniu_id) {
        params.domeniu_id = domeniu_id;
    }

    mester.getAll(params, function(rows) {
        // console.log(rows);
        self.view('all', rows);
        
    });
    

}

