// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";


contract ElonNFT is ERC721URIStorage {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
 
   constructor(string memory name, string memory symbol) ERC721("ElonMusk", "ELON") {
       console.log("The NFT name :",name);
       console.log("Symbol :",symbol);
       console.log("Owner :",msg.sender);

   }
    
   function mintNFT() public returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, "https://jsonkeeper.com/b/NM6C");
        console.log("The NFT ID %s has been minted to %s", newItemId, msg.sender);
        return newItemId;
    }
}
