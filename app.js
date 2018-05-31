'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

module.exports = app; // for testing

//CORS and Header Parameters
require('./middleware/CrossOriginMW')(app); 

//Application Configurations
require('./config/Configurations')(app);

var config = {
	appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  	if (err) { throw err; }

  	// install middleware
  	swaggerExpress.register(app);

  	var port = process.env.PORT || 10010;
  	app.listen(port);

  	if (swaggerExpress.runner.swagger.paths['/hello']) {
    	console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  	}

});
