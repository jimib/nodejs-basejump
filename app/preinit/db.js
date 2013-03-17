var util = require("util");
var Schema = require('jugglingdb').Schema;

module.exports = function(app){
	//create the schema for our other models to bind to
	console.log("connected to db: "+ util.inspect(app.config));
	app.db = new Schema('mongodb', app.config.mongo);
}