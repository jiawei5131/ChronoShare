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
});

orderSchema = Schema({
	email: String,
	status: Number,//0: placed but not picked up, 1: placed and picked up, 2: delivered but not received, 3: delivered and received, 4: canceled
	iteminfo: {
		item: String,
		price: Number,
		store_location: String,
		store_zip: String
	},
	receiversinfo: {
		adds: String,
		zip: String
	},
	deliversinfo:{
		email: String
	}},
	{ timestamps: { createdAt: 'created_at' } });

DisccusionSchema = Schema({
	firstname: String,
	content: String
	},
	{timestamps: { createdAt: 'created_at' }});

ProfleSchema = Schema({
	email: {type: String, unique: true},
	password: String,
	name:{
		firstname:String,
		lastname: String
	}
});
