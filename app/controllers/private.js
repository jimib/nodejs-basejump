module.exports = function(app){
	var viewsDir = "private/";
	
	function checkLoggedIn(req, res, next){
		//use the login controller to restrict access
		app.controllers.login.excludeNonUser(req, res, next);
	}
	
	return{
		index : [checkLoggedIn, function(req, res, next){
			
			res.render(viewsDir + "index");
		}]
	}
}