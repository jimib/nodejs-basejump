var chauffeur = require("chauffeur");
var util = require("util");

module.exports = function(app){
	//configure out routes
	app.locals = app.locals || {};
	app.locals.routes = app.routes = chauffeur(app, function(map){
		map.get("/", app.controllers.home.index, "home");
		//login/logout
		map.get("/login", app.controllers.login.login, "login");
		map.post("/login", app.controllers.login.loginPOST, "loginPOST");
		map.get("/logout", app.controllers.login.logout, "logout");
		//add a private directory
		map.namespace("private", function(map){
			map.get("", app.controllers.private.index, "index");
		});
	});
	
	console.log(util.inspect(app.routes));
}