var web3 = Web3()

//1. Find current minimum transaction fee
//2. Make a transaction to a given address w/ given 

module.exports = class Eth{
	var addressA
	var addressB

	constructor(node_address)
	{
		web3.setProvider('http://localhost:8545');

		addressA = process.env.ETH_ADRESS_A
		addressB = process.env.ETH_ADRESS_B

	}	

	make_transaction(hash)
	{

		// Make transaction from a to b address

		web3.eth.sendTransaction({
			"from":addressA,
			"to":addressB,
			"value":1
			"data":hash
		});

	}
}