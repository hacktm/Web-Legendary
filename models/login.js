 
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
	  if (err) handler(false);
	  if(rows && rows.length >0 && handler)
	  {
        var sql = "SELECT * FROM "+(rows[0].type==1 ? 'mesteri' : 'users')+" WHERE user_id="+rows[0].id+" LIMIT 1";
          connection.query(sql, function(err, row, fields) {
              rows[0].password = null;
              rows[0].details = row[0];
              handler(rows[0]);
          });

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
						" register_date=NOW(),"+
                        " activ = 1"+
					"";
	
		connection.query(sql, function(err, rows, fields) {
			if (err) handler(false);
			if(handler)
			{


                var sql = "INSERT INTO "+(parseInt(params.type)==1 ? "mesteri" : "users")+
                                " SET "+
                                " user_id='"+rows.insertId+"' "+
                                "";
//                console.log(sql);
                connection.query(sql, function(err, row, fields) {
                    if (err) handler(false);
                    if(handler)
                    {
                        handler(true);
                    }

                });

			}		
		  
		});
	}

	return;
}

exports.recover_password = function(email,handler) {


    var sql = "SELECT * FROM logins WHERE email='"+email+"' activ=1 LIMIT 1";

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        if(rows && rows.length >0 && handler)
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