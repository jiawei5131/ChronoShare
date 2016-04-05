var express = require('express');
var router = express.Router();
var sess

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		res.render('contact', {loggedin: true});
	}else{
	  res.render('contact');
	}
});

module.exports = router;
