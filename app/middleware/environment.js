var express = require("express");

module.exports = function(app){
	app.use(app.router);
	app.use(express.static(__dirname + '/../public'));
	app.use(express.errorHandler());
	
	// Optional since express defaults to CWD/views
	app.set('views', __dirname + '/../views');

	// Set our default template engine to "jade"
	// which prevents the need for extensions
	// (although you can still mix and match)
	app.set('view engine', 'jade');
}