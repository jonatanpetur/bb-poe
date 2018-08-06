var Web3 = require('web3')
var web3 = new Web3();

//1. Make a transaction to a given address w/ given 

module.exports = class Eth{
	
	constructor(node_address)
	{
		web3.setProvider('http://localhost:8545');

		this.addressA = process.env.ETH_ADDRESS_A
		this.addressB = process.env.ETH_ADDRESS_B

		this.fee = process.env.ETH_FEE;

	}

	register(hash){


		var transaction = make_transaction(hash);

		var proof = {};

		//construct ETH proof

		return proof;
	}

	make_transaction(hash)
	{

		// Make transaction from a to b address

		web3.eth.sendTransaction({
			"from":addressA,
			"to":addressB,
			"value":1,
			"data":hash,
		});

	}
}