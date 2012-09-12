var util = require("util");
var app = require('express')();

require("earlybird")(app, __dirname + "/app");

app.listen(3000);
