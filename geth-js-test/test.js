var Web3 = require('web3');
var web3 = new Web3()

web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
console.log('++++++++++++++++++++++++++')
console.log('RPC WORKS, CURRENT BLOCK ACCORDING TO RPC IS: ')
web3.eth.getBlockNumber().then(console.log);

const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
if (error) return console.error(error);

console.log('Successfully subscribed!', blockHeader);
}).on('data', (blockHeader) => {
console.log('data: ', blockHeader);
});
