module.exports = function(app){
	String.prototype.injectParam = function(param, value){
		var regexp = new RegExp(":"+param, "g");
		return this.toString().replace(regexp, value);
	}
}
