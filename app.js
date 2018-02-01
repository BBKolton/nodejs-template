var express = require('express');
var http = require('http');
var https = require('https');
var compression = require('compression');
var bodyParser = require('body-parser');
var config = require('./config');
var path = require('path');
var glob = require('glob');

var app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(config.root, 'app', 'view'));


app.use(express.static('public'));

var controllers = glob.sync(path.join(config.root, 'app', 'controller', '*.js'));
console.log(path.join(config.root, 'app', 'controllers', '*.js'))
console.log(controllers)
controllers.forEach(function assignController(controller) {
	require(controller)(app);
});

app.use(function(req, res) {
	res.status(404).end('404');
});

var server = app.listen(8080, function() {
	console.log('App running on port ' + server.address().port)
});