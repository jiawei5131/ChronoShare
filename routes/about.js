var express = require('express');
var router = express.Router();
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
	sess = req.session;

	if(sess.email){
		res.render('about', {loggedin: true});
	}else{
	  res.render('about');
	}
});

module.exports = router;
