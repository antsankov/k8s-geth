var Web3 = require('web3');

console.log(Web3.version);

var web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));



web3.eth.getBlockNumber(console.log);

