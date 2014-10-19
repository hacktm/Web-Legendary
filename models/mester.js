 
// important
exports.name = 'mester';

 
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


	var sql = "SELECT * FROM mesteri WHERE id='"+id+"' LIMIT 1";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(rows[0]);
	  }		
	  
	});
	
	return;
};

exports.setInfo = function(user_id, nume, prenume, descriere, judet_id, oras, handler) {


	var sql = "UPDATE mesteri SET nume='" + nume + "', prenume='" + prenume + "', descriere='" + descriere + "', judet_id='" + judet_id + "', oras='" + oras + "' WHERE user_id='" + user_id + "' LIMIT 1";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(true);
	  }		
	  
	});
	
	return;
}

exports.create = function(id, nume, prenume, descriere, judet_id, oras, rating, numar_voturi, handler) { 

	var sql = "INSERT INTO mesteri (nume,prenume,descriere,judet_id,oras,rating) VALUES ('" + nume + "', '" + prenume + "','" + descriere + "', '" + judet_id + "', '" + oras + "', '" + rating + "', '" + numar_voturi + "')";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  if(handler)
	  {
	  	handler(true);
	  }		
	  
	});
	
	return;

}

exports.getAll = function(params, handler) {
	var where = " WHERE 1=1 ";
	var join = "";
	var limit = "";
	
	if (params) {

		if (params.judet_id > 0) {
			 where += "AND judet_id=" + parseInt(params.judet_id);
		}
		if (params.domeniu_id > 0) {
			join += " LEFT join domenii_activitate_mesteri as d on (d.mester_id = m.user_id)";
			where += " AND d.domeniu_id=" + parseInt(params.domeniu_id);
		}
		if (params.limit) {
			limit += " limit " + params.limit;
		}
		
	}

	var sql = "SELECT * FROM mesteri as m " + join + where + limit;
	// console.log(sql);
    connection.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if(handler)
	  {
	  	handler(rows);
	  }	
    }); 

}