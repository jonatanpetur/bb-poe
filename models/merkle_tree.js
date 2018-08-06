var merkle = require('merkle');

module.exports = class MerkleTree(){
	// Construct a merkle hash tree from a list of hashes
	constructor(hashes){
		this.tree = merkle('sha1').sync(hashes);
	}

	getRoot(){
		return this.tree.root()
	}

	//
	generateProof(hash)
	{
		
	}

	// get a list of operations to verify the merkle tree
	getOperations()
	{

	}
}