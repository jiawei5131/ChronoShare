var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		//res.render('delivers_select',{loggedin: true});
		var all_order = mongoose.model('Order', orderSchema);
		all_order.find({ 'status': '0' }, function (err, order) {
  			if (err) return handleError(err);
  			res.render('delivers_select',{loggedin: true, orders : order});// Space Ghost is a talk show host.
		});
	}
	else{
		res.redirect('/users/login');
	}
});


router.post('/', function(req, res, next){

	sess = req.session;
	if(sess.email){
		var orderid = req.body.orderID;
		var one_order = mongoose.model('Order', orderSchema);
		one_order.findOne({ '_id': orderid}, function (err, order){
			//if (err) return handleError(err);
			order.deliversinfo.email = sess.email;
			order.status = 1;
			order.save();
			//console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) 
			//console.log('%s',order.deliversinfo);
		});
		res.render('delivers_order_success', {loggedin: true});
		//console.log(order);
	}
	else{
		res.redirect('/users/login');
	}
});

module.exports = router;