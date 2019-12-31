pragma solidity ^0.5.0;

contract EtherWallet {

  address public owner;

  constructor(address _owner) public {
    owner = _owner;
  }

  function deposit() public payable {
  }

  function send(address payable to, uint amount) public {
    if (msg.sender == owner) {
      to.transfer(amount);
      return;
    }
    revert('sender is not allowed');
  }

  function balanceOf() public view returns(uint) {
    return address(this).balance;
  }

}