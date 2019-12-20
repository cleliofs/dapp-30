var contractABI = [];
var contractAddress = '0xeC70cbaBA7adb94923Eb97Ae79b47AeDA32Bbae6';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
