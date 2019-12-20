var contractABI = [{
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }]
//var contractAddress = '0x5bAd2CF6AAB3ffE521F4d3b8eED6e645e767E251' 
var contractAddress = '0xCBeb436461e7Caf5b14573A3184D4fBBf1D7d0dC' 

var web3 = new Web3('http://localhost:9545')
var helloWorld = new web3.eth.Contract(contractABI, contractAddress)

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.hello().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result
  })
})
