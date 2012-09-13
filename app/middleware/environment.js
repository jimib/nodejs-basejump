var flash = require("connect-flash");
var express = require("express");

module.exports = function(app){
	app.configure(function(){
		//enable our view engine
		app.set('views', __dirname + '/../views');
		app.set('view engine', 'jade');
		
		app.use(express.cookieParser('keyboard cat'));
		app.use(express.session({ cookie: { maxAge: 60000 }}));
		app.use(flash());
		
		app.use(function(req, res, next) {
	    	res.locals.flash = function() { return req.flash() };
	    	next();
		});
		
		app.use(app.router);
		app.use(express.static(__dirname + '/../public'));
		app.use(express.errorHandler());
	});
	
}