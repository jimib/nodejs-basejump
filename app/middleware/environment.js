var flash = require("connect-flash");
var express = require("express");

module.exports = function(app){
	app.configure(function(){
		//enable our view engine
		app.set('views', __dirname + '/../views');
		app.set('view engine', 'jade');
		
		app.use(express.bodyParser());
		app.use(express.cookieParser('keyboard cat'));
		app.use(express.session({ cookie: { maxAge: 60000 }}));
		app.use(flash());
		
		app.use(function(req, res, next) {
			//create a set of exposed methods for the view to access certain data - won't be triggered/used until the view is rendered
	    	res.locals.flash = function() { return req.flash() };
			res.locals.isLoggedIn = function(){return app.controllers.login.isLoggedIn(req)};
	    	
			//now these methods have been bound - on to the next
			next();
		});
		
		app.use(app.router);
		app.use(express.static(__dirname + '/../public'));
		app.use(express.errorHandler());
	});
	
}