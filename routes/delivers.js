var express = require('express');
var router = express.Router();
var sess;

/* GET delivers page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		res.render('delivers', {loggedin: true});
	}else{
	  res.render('delivers');
	}
});

/* GET delivers page. */
router.get('/searchorder', function(req, res, next) {
  
});

router.get('/foundorder', function(req, res, next) {
  
});

module.exports = router;