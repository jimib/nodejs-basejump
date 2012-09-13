var chauffeur = require("chauffeur");
var util = require("util");

module.exports = function(app){
	//configure out routes
	app.routes = chauffeur(app, function(map){
		map.get("/", app.controllers.home.index, "index");
		//namespace
		map.get("/login", app.controllers.login.loginGET, "loginGET");
		map.post("/login", app.controllers.login.loginPOST, "loginPOST");
		map.get("/logout", app.controllers.login.logout, "logout");
	});
	
	console.log(util.inspect(app.routes));
}