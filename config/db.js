var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

userSchema = Schema({
	email: {type: String, unique: true},
	password: String,
	name: {
		firstname: String,
		lastname: String
	}
})