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
}
