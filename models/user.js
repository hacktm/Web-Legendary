 
// important
exports.name = 'user';

 
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
 
exports.getInfo = function(id, handler) {


	var sql = "SELECT * FROM users WHERE id='"+id+"' LIMIT 1";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(rows[0]);
	  }		
	  
	});
	
	return;
};

exports.setInfo = function(id, nume, prenume, judet_id, oras, handler) {


	var sql = "UPDATE users SET nume='" + nume + "', prenume='" + prenume + "', judet_id='" + judet_id + "', oras='" + oras + "' WHERE user_id='" + id + "' LIMIT 1";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(true);
	  }		
	  
	});
	
	return;
}

exports.create = function(id, nume, prenume, judet_id, oras, handler) { 

	var sql = "INSERT INTO users (nume,prenume,judet_id,oras) VALUES ('" + nume + "', '" + prenume + "', '" + judet_id + "', '" + oras + "')";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(true);
	  }		
	  
	});
	
	return;

}