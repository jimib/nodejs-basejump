module.exports = function(){
	var viewsDir = "home/";
	
	return{
		index : function(req, res, next){
			res.render(viewsDir + "index");
		}
	}
}