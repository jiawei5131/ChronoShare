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
  password = sess.password;

  if (email){
  	// session exists
  	// check the session validity
  	User.findOne({
	  	email: email,
	  	password: password
	  })
	  .exec(function(err, user){
	  	if (err) {
	  		// user cannot be found or mismatch
	  		var error = "Something went wrong please login again"
	  		res.render('login', {eror: error});
	  	}else{
	  		// session is valid
	  		// list all the orders placed by the user
	  		Order.find({deliversinfo: {email: email}}, function(err, orders){

	  			// find some recommandations
	  			Order.find({status: 0})
	  				.sort({created_at: -1}).limit(30)
	  					.exec(function(err, openorders){
	  						res.render('orders_delivered', {
				  				orders: orders,
				  				loggedin: true,
				  				openorders: openorders
				  			});
	  					})
	  		});
	  	}
	  });

  }else{
  	// session not exists
  	return res.redirect('/users/login');
  }
}); 



module.exports = router;