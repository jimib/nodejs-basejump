module.exports = function(app){
	//set up the application locals
	app.locals = app.locals || {};
	app.locals.html = require("flatpack")(app);
}