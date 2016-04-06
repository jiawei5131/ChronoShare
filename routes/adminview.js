var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User', userSchema);
var Order = mongoose.model('Order', orderSchema);
var sess;


/* GET orders page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  email = sess.email;

  if (sess.email){
	  		Order.find({}, function(err, orders){
	  						res.render('adminview', {
				  				orders: orders,
				  				loggedin: true,
				  				adminview: true
				  			});
	  					});
			
	}else{
  	// session not exists
  	return res.redirect('/users/login');
  }
}); 



module.exports = router;