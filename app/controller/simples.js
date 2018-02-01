var router = require('express').Router();

console.log('hey there world')

module.exports = function(app) {
	app.use('/', router);
};

router.get('/', function(req, res) {
	res.render('index');
})