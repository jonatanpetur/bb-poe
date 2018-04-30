var Mongo = require('../lib/db/mongo.js');
var db = new Mongo();


exports.create = (req, res) => {
	//
	console.log(req);
	db.storeNew(req.body.hash);
	res.send();

};
exports.get = (req, res) => {};
exports.verify = (req, res) => {};