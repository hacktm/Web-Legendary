 
// important
exports.name = 'login';

 
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
 
// =======================================================
// USER DEFINED:
// =======================================================
 
exports.authenticate = function(email,pass,handler) {


	var sql = "SELECT * FROM logins WHERE email='"+email+"' AND password=MD5('"+pass+"') AND activ=1 LIMIT 1";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	rows[0].password = null;
	  	handler(rows[0]);
	  }		
	  
	});
	
	return;
};