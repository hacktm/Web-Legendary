 
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
	  if(rows && rows.lentgh >0 && handler)
	  {	  	
	  	rows[0].password = null;
	  	handler(rows[0]);
	  }else
	  {
	  	handler();
	  }		
	  
	});

	return;
};

exports.register = function(params,handler)
{
	/*@TODO de setat niste constante pt type*/
	if(params)
	{
		var sql = "INSERT INTO logins "+
				   " SET "+
						" email='"+params.email+"',"+
						" password=MD5('"+params.pass+"'),"+
						" type='"+parseInt(params.type)+"',"+
						" register_date=NOW()"+
					"";
	
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err; //@TODO de tratat exceptiile
			if(handler)
			{				
				handler(true);
			}		
		  
		});
	}

	return;
}

exports.recover_password = function(email,handler) {


    var sql = "SELECT * FROM logins WHERE email='"+email+"' activ=1 LIMIT 1";

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        if(rows && rows.lentgh >0 && handler)
        {
            handler(rows[0]);
        }
        else
        {
            handler();
        }

    });

    return;
};