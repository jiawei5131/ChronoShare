var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// profile page
router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		//res.render('delivers_select',{loggedin: true});
		var user = mongoose.model('User', userSchema);
		user.findOne({ 'email': sess.email }, function (err, one_user) {
  			if (err) return handleError(err);
  			res.render('profile',{loggedin: true, user: one_user});// Space Ghost is a talk show host.
		})
	}
	else{
		res.redirect('/users/login');
	}
});

module.exports = router;