var express = require('express');
var mongoose = require('mongoose');
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

/* POST receivers page
 * Receivers place orders */
router.post('/', function(req, res, next){
	sess = req.session;

	if(sess.email){
		// user is logged in
		var item = req.body.storeitem;
		var price = req.body.storeitem_price;
		var store_location = req.body.storeadds;
		var store_zip = req.body.storeadds;
		var receiversadds = req.body.receiversadds;
		var receiverszip = req.body.receiverszip;
		var order_status = 0;

		var Order = mongoose.model('Order', orderSchema);

		var order = new Order({
			email: sess.email,
			status: order_status,
			iteminfo: {
				item: item,
				price: price,
				store_location: store_location,
				store_zip: store_zip
			},
			receiversinfo: {
				adds: receiversadds,
				zip: receiverszip
			},
			delivered: false
		});

		order.save(function(err){
		if (err) {
			var error = "Something went wrong, please try again"
			if (err.code === 11000){
				// This case is really reare
				error = "The order has exists."
				res.render('receivers', {error: error});
			}
			res.render('receivers', {error: error});
		}else{
			// order has been saved
			res.render('receivers_order_success', {loggedin: true});
		}
	});

	}else{
		// user is not logged in
		res.redirect('/users/login');
	}
});


module.exports = router;