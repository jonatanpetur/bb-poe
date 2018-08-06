var Mongo = require('../lib/db/mongo.js');
var db = new Mongo();

var bcHandler = require("../lib/bcHandler.js");


exports.create = (req, res) => {
	//

	console.log(req);

	db.storeNew(req.body.hash);



	res.json({
		"response":{
			"status":"testing"
		}
	});
};

exports.get = (req, res) => {
	//
};

exports.verify = (req, res) => {
	//
};