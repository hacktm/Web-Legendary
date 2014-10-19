/**
 * Created by thunder on 10/19/14.
 */
/**
 * Created by thunder on 10/19/14.
 */

// important
exports.name = 'judet';


// optional
exports.install = function(framework, options) {
    // Is executed one time
};

// optional
exports.uninstall = function(framework, options) {
    // Is executed one time
};

// optional
exports.usage = function() {
    // Example: framework.usage(true) returns framework usage.
    // Must return some object.
    return {};
};



exports.getAll = function(handler) {


    var sql = "SELECT * FROM judete";

    connection.query(sql, function(err, rows, fields) {

        if (err) throw err;
        if(rows && rows.length >0 && handler)
        {
            handler(rows);
        }else
        {
            if(handler)
                handler();
        }

    });

    return;
};