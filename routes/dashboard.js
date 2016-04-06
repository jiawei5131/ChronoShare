var express = require('express');
var router = express.Router();
var sess;

/* GET dashboard page. */
router.get('/', function(req, res, next) {
	sess = req.session;

	if(sess.email){


		res.render('dashboard', {loggedin: true});
	}else{
	  res.render('dashboard');
	}
});

module.exports = router;
