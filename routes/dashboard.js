var express = require('express');
var router = express.Router();
var sess;

/*router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		//res.render('delivers_select',{loggedin: true});
		var all_user = mongoose.model('Order', orderSchema);
		all_user.findOne({ 'email': sess.email }, function (err, one_user) {
  			if (err) return handleError(err);
  			res.render('dashboard',{loggedin: true, one_user});// Space Ghost is a talk show host.
		})
	}
	else{
		res.redirect('dashboard');
	}
});*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
	sess = req.session;

	if(sess.email){


		res.render('dashboard', {loggedin: true});
	}else{
	  res.render('dashboard');
	}
});
*/
module.exports = router;
