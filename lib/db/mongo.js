var MongoClient = require("mongodb").MongoClient;
var Server = require("mongodb").Server;

function DbAdapter() {
	console.log("yo");
	this._client = MongoClient.connect(
		"mongodb://localhost:27017",
		function(err, client) {
			console.log(client);
			if (err) {
				throw err;
			}


			var db = client.db("bb-poe")
			this._db = db;
			db.collection("items").insert({ hash: "hash" });

			console.log(this)
		}.bind(this)
	);

	this.storeNew = function(hash) {
		this._db.collection("items").insert({ hash: hash });
	};
}

DbAdapter.prototype.fetch = function(id) {};

module.exports = DbAdapter;
