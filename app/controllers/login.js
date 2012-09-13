var util = require("util");
module.exports = function(app){
	var viewsDir = "login/";
	
	function isLoggedIn(req){
		return req.session.loggedIn == true ? true : false;
	}
	
	function getUser(req, res, next){
		//load the user for the current session
		next();
	}
	
	return{
		login : function(req, res, next){
			//display the login form
			console.log("req.session.loggedIn: ", req.session.loggedIn);
			res.render(viewsDir + "index");
		},
		loginPOST : function(req, res, next){
			//process the login post
			var form = req.body.login || {};
			var username = form.username;
			var password = form.password;
			
			if(username == "jimib" && password == "nodejs"){
				//login the user in
				req.session.loggedIn = true;
				req.flash('info', "You are logged in");
				res.redirect(app.routes.home);
			}else{
				req.flash('error', "Username and password does not match");
				res.render(viewsDir + "index", {locals:{username:username}});
			}
		},
		logout : function(req, res, next){
			//logout
			req.session.loggedIn = false;
			req.flash('info', "You are logged out");
			//do we need to redirect
			res.render(viewsDir + "index");
		},
		getUser : getUser,
		excludeNonUser : function(req, res, next){
			//load the user for the current session
			if(isLoggedIn(req)){
				//ok - we can carry on
				getUser(req, res, next);
			}else{
				//redirect to the login page
				res.redirect(app.routes.login);
			}
		},
		isLoggedIn : isLoggedIn
	}
}