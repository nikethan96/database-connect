'use strict';

module.exports = function(app) {
	
	app.set('super_secret', 'Nikki');
	app.set('mysql_host', '127.0.0.1'); // MYSQL Database Host IP
    app.set('mysql_username', 'root'); // MYSQL Username
    app.set('mysql_password', 'root'); // MYSQL User Password
    
    app.set('mysql_DB', 'TESTDB'); // MYSQL DB
    app.set('mysql_query', 'TESTDB'); // MYSQL DB
};
