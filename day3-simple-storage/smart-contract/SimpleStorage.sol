pragma solidity ^0.5.0;

contract SimpleStorage {
    string public data; // a variable outside of a function is by default saved in in blockchain, "storage"

    function set(string memory _data) public {
        data = _data;
    }

    // "view" keyword indicates a function is a getter
    // "pure" keyword indicates it is a function that does not change value 
    function get() public view returns(string memory) {
        return data;
    }

}