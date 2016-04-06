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
router.post('/', function(req, res, next) {
	sess = req.session;

	//res.render('delivers_order_success', {loggedin: true});
	if(sess.email){
		// user is logged in
		var current_add= req.body.current_location;
		var dest_add = req.body.dest_location;
		var current_zip = req.body.current_zip;
		var dest_zip = req.body.dest_zip;
		//console.log(current_add+dest_add+current_zip+dest_zip );

		res.redirect('/users/delivers_select');

	}else{
		// user is not logged in
		res.redirect('/users/login');
	}
});

/*
router.get('/delivers_order_success', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		//res.render('delivers_order_success',{loggedin: true});
		var order = mongoose.model('Order', orderSchema);
		order.findOne({ 'status': '0' }, function (err, all_order) {
  			if (err) return handleError(err);
  			console.log(order.email+order.status+order.receiversinfo.adds+order.receiversinfo.zip) // Space Ghost is a talk show host.
		})
	}
	else{
		res.redirect('/users/login');
	}
});*/
/*
router.get('/foundorder', function(req, res, next) {
  
});*/

module.exports = router;