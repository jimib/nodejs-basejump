module.exports = function(app){
	var schema = app.schema;
	
	if(schema){
		var Schema = require('jugglingdb').Schema;
		
		// simplier way to describe model
		var User = schema.define('User', {
		    name:         	String,
		    email:        	Schema.Text
		});
	
		//define additional methods on the instance
		User.prototype.injectSelf = function(data){
			if(!data){
				console.log("Unable to injectSelf into '"+data+"'");
				return data;
			}
			//injects itself into the string where ':user' is present
			return data.replace(/:user/g, this.id);
		};
	
		//define static methods
		//User. = function(){};
		
		return User;
	}else{
		return null;
	}
};