var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var crypto = require('crypto');
var appSecret = 'appSecret';
var router = express.Router();
var sess 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/dashboard');
  });



/* GET users login page*/
router.get('/login', function(req, res, next) {
	sess = req.session;

	if (sess.email){
		// session exists
		res.render('dashboard', {loggedin: true});
	}else{
		res.render('login');
	}

});



/* POST users login page*/
router.post('/login', function(req, res, next){
  var User = mongoose.model('User', userSchema);
  var email = req.param('email');
  var password = req.param('password');
  var encryptedPassword = crypto.createHmac('sha256',appSecret)
                  .update(password)
                  .digest('hex');

  User.findOne({
    email: email,
    password: encryptedPassword
  })
  .exec(function(err, user){
    if (err) throw err;
    
    // email and password does not match
    if (!user){
    	error = 'email or password entered does not match'

      res.render('login', {error: error});
    }else{
    	// log in information matches
    	// pass sessions to the user
    	sess = req.session;

    	sess.email = user.email;

      res.render('loginwelcome', {loggedin: true});
    }
  });

});



/* GET register */
router.get('/signup', function(req, res, next){
	res.render('signup');
});



/* POST register */
router.post('/signup', function(req, res, next){
	var User = mongoose.model('User', userSchema);
	var email = req.body.email;
	var fname = req.body.firstname;
	var lname = req.body.lastname;
	var password = req.body.password;
	var passwordAgain = req.body.passwordAgain;

	// validate if the passwords match
	if (password !== passwordAgain){
		var error = "passwords do not match";
		res.render('signup', {error: error});
	}


	var encryptedPassword = crypto.createHmac('sha256',appSecret)
                  .update(password)
                  .digest('hex');

	var user = new User({
		email: email,
		password: encryptedPassword,
		name: {
					 firstname: fname,
					 lastname: lname
					}
	})

	user.save(function(err){
		if (err) {
			var error = "Something went wrong, please try again"
			if (err.code === 11000){
				error = "That email has been registered."
				res.render('signup', {error: error});
			}
			res.render('signup', {error: error});
		}else{
			var note = "You are now a member."
			res.render('login', {note : note});
		}
	});

});


/* GET users logout page*/
router.get('/logout', function(req, res, next) {
	sess = req.session;

	if (sess.email){
		sess.destroy();
		res.render('index');
	}

});

module.exports = router;
