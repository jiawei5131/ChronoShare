var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/', function(req, res, next) {

	sess = req.session;
	if(sess.email){
		var Disscussion = mongoose.model('Disscussion',DisccusionSchema);

		Disscussion.find({}, function (err, message) {
  			if (err) return handleError(err);
  			res.render('discussion',{loggedin: true, message : message});// Space Ghost is a talk show host.
		});
		
	}
	else{
		res.redirect('/users/login');
	}
});

router.post('/', function(req, res, next) {
	sess = req.session;
	
	if(sess.email){
		// user is logged in
		var message= req.body.comment;
		var usrs = mongoose.model('Users',userSchema);
		var first_name;
		usrs.findOne({'email' : sess.email}, function(err,user){
			first_name = user.name.firstname;
			var Disscussion = mongoose.model('Disscussion',DisccusionSchema);
			var diss = new Disscussion({
					firstname: first_name,
					content: message,
						});
			diss.save();

			Disscussion.find({}, function (err, message) {
	  			if (err) return handleError(err);
	  			res.render('discussion',{loggedin: true, message : message});// Space Ghost is a talk show host.
			});
		});


	}else{
		// user is not logged in
		res.redirect('/users/login');
	}
});



module.exports = router;