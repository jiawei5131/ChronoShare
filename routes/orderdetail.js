var express = require('express');
var mongoose = require('mongoose');
var Order = mongoose.model('Order', orderSchema);
var router = express.Router();
var sess;

/* GET order detail page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		// user is logged in
		var objectId = req.query.objectId;

		Order.findOne({
			_id: objectId;
		}, function(err, order){
			if(err){
				// error has occured
			}else{
				// order with orderId found
				
			}
		});

		res.render('orderdetail', {loggedin: true});
	}else{
	  return res.redirect('/users/login');
	}
});

module.exports = router;