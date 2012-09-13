module.exports = function(app){
	var viewsDir = "login/";
	
	return{
		loginGET : function(req, res, next){
			//display the login form
			req.flash('info', "You are logged in");
			res.render(viewsDir + "index");
		},
		loginPOST : function(req, res, next){
			//process the login post
			res.render(viewsDir + "index");
		},
		logout : function(req, res, next){
			//logout
			res.render(viewsDir + "index");
		},
		getUser : function(req, res, next){
			//load the user for the current session
			
		}
	}
}