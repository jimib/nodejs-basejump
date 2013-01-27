module.exports = function(app){
	String.prototype.injectParam = function(param, value){
		var regexp = new RegExp(":"+param, "g");
		return this.toString().replace(regexp, value);
	}
	
	Array.prototype.forEachAsync = function(action, cb){
		var self = this;
		var i = - 1;
		var lim = this.length;

		next();

		function next(){
			if(++i < lim){
				action(self[i], function(err, result){
					self[i] = result || self[i];
					next();
				});
			}else{
				cb();
			}
		}
	}
	
	
	//ADD A MERGE PROPERTY TO OBJECT
	Object.defineProperty(Object.prototype, "merge", {
	    enumerable: false,
	    value: function(from, boolOverride) {
			if(boolOverride == undefined){
				boolOverride = false;
			}
			
	        var props = Object.getOwnPropertyNames(from);
	        var dest = this;
	        props.forEach(function(name) {
	            if (boolOverride || !(name in dest)) {
	            	dest[name] = from[name];
	            }
	        });
	        return this;
	    }
	});
}
