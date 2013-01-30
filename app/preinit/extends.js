module.exports = function(app){
	String.prototype.injectParam = function(param, value){
		var regexp = new RegExp(":"+param, "g");
		return this.toString().replace(regexp, value);
	}
	
	Array.forEachAsync = function(arr, action, cb){
		var self = arr;
		var i = - 1;
		var lim = this.length;

		next();

		function next(){
			if(++i < lim){
				action(self[i], function(err, result){
					//self[i] = result || self[i];//? - WHAT IS THIS LINE DOING - NO IDEA COMMENTED OUT
					next();
				});
			}else{
				cb();
			}
		}
	}
	
	Object.merge = function(a, b, boolOverride){
		if(boolOverride == undefined){
			boolOverride = false;
		}
		
		for(var i in b){
			if(boolOverride || a[i] == undefined)
			{
				a[i] = b[i];
			}
		}
	}
}
