var chauffeur = require("chauffeur");
var util = require("util");

module.exports = function(app){
	//configure out routes
	app.routes = chauffeur(app, function(map){
		map.get("/", app.controllers.home.index, "index");
		//namespace
		map.resource("blog", app.controllers.blog, function(map){
			
		});
	});
	
	console.log(util.inspect(app.routes));
}