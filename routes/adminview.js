var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		res.render('adminview', {loggedin: true, adminview:true});
	}else{
	  res.render('adminview', {adminview:true});
	}
});

module.exports = router;
