var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		//res.render('delivers_select',{loggedin: true});
		var order = mongoose.model('Order', orderSchema);
		order.find({}, function (err, doc) {
  			if (err) return handleError(err);
  			//console.log(doc.email+"\n"+doc.status+"\n"+doc.receiversinfo.adds+"\n"+doc.receiversinfo.zip+"\n"); // Space Ghost is a talk show host.
  			res.render('delivers_select',{loggedin: true, orders : doc});
		});
		
	}
	else{
		res.redirect('/users/login');
	}
});

module.exports = router;