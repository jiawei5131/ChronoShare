var express = require('express');
var router = express.Router();
var sess;

/* GET receivers page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		res.render('receivers', {loggedin: true});
	}else{
	  res.render('receivers');
	}
});

router.post('/', function(req, res, next){

});


/* GET place order on success page. */
router.get('/order-success', function(req, res, next) {
  
});

router.get('/order_received', function(req, res, next) {
  
});

module.exports = router;