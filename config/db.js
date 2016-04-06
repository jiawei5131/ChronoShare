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
	status: Number,//0 is in receiver ordered no pickup, 1 is picked, 2 delivered
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
	}
	//{ timestamps: { createdAt: 'created_at' } } 
});

DisccusionSchema = Schema({
	firstname: String,
	content: String,
	//{timestamps: { createdAt: 'created_at' }}
});
/*
ProfleSchema = Schema({
	email: {type: String, unique: true},
	password: String,
	name:{
		firstname:String,
		lastname: String
	}
});*/