var express = require('express');
var mongoose = require('mongoose');
var Order = mongoose.model('Order', orderSchema);
var User = mongoose.model('User', userSchema);
var router = express.Router();
var sess;

/* GET order detail page. */
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
	  		var error = "Something went wrong please login again";
	  		res.render('login', {eror: error});
	  	}else{
	  		// session is valid
	  		// list all the orders placed by the user
	  		var objectId = req.query.objectId;
	  		var newStatus = req.query.newStatus;

	  		Order.findByIdAndUpdate(objectId, {status: newStatus}, function(err, order){
	  			if (err) {
	  				// error occured while query the order
	  				console.log("error has occured");
	  			}else{
	  				if (newStatus == 3){
	  					res.render("orderstatus_change", {order: order, status3: true, loggedin: true});
	  				}else if(newStatus == 4){
	  					res.render("orderstatus_change", {order: order, status4: true, loggedin: true});
	  				}
	  			}
	  		});
	  	}
	  });

  }else{
  	// session not exists
  	return res.redirect('/users/login');
  }
}); 

module.exports = router;