var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		res.render('delivers_select',{loggedin: true});
		var order = mongoose.model('Order', orderSchema);
		order.findOne({ 'status': '0' }, function (err, all_order) {
  			if (err) return handleError(err);
  			console.log(order.email+order.status+order.receiversinfo.adds+order.receiversinfo.zip) // Space Ghost is a talk show host.
		})
	}
	else{
		res.redirect('/users/login');
	}
});

module.exports = router;