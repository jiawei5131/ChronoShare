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
			_id: objectId
		}, function(err, order){
			if(err){
				// error has occured
			}else{
				// order with orderId found
				if (order.status === 0){
					// order placed but not picked up
					res.render('orderdetails', {order: order, status0: true, loggedin:true});

				}else if(order.status === 1){
					// order placed and picked up
					res.render('orderdetails', {order: order, status1: true, loggedin:true});

				}else if(order.status === 2){
					// delivered but not received
					res.render('orderdetails', {order: order, status2: true, loggedin:true});

				}else if(order.status === 3){
					// delivered and receivd
					res.render('orderdetails', {order: order, status3: true, loggedin:true});

				}else if(order.status === 4){
					// canceled
					res.render('orderdetails', {order: order, status4: true, loggedin:true});
				}
			}
		});

	}else{
		// user session expired
	  return res.redirect('/users/login');
	}
});

module.exports = router;