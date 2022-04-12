// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// We first import some OpenZeppelin Contracts.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We inherit the contract we imported. This means we'll have access
// to the inherited contract's methods.
contract NebulaNFT is ERC721URIStorage {
    // Magic given to us by OpenZeppelin to help us keep track of tokenIds.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    Output[] public publicTokens;
    mapping(address => Output[]) public privateTokens;
    mapping(address => uint256[]) public sharedTokenIds;
    mapping(address => uint256[]) public recievedTokenIds;
    Input public names;

    // We need to pass the name of our NFTs token and its symbol.
    constructor() ERC721("josephNFT", "SQUARE") {
        console.log("This is my NFT contract. Woah!");
    }

    struct Input {
        bool isPrivate;
        string ipfsUrl;
        string name;
        string desc;
    }

    struct Output {
        bool isPrivate;
        string ipfsUrl;
        string name;
        string desc;
        uint256 tokenId;
        address owner;
    }

    //Retrieve all public tokens
    //Retrieve a users shared tokens
    //Retrieve tokens that were shared to a user
    //Retrieve a users private token
    //Retrieve all users token (private and public)

    //getUsersTokens (A combination of all public tokens and users private tokens)
    //getSharedTokens
    //getRecievedTokens

    function mintToken(Input memory input) public {
        // Get the current tokenId, this starts at 0.
        uint256 newItemId = _tokenIds.current();

        // Actually mint the NFT to the sender using msg.sender.
        _safeMint(msg.sender, newItemId);
        if (input.isPrivate) {
            privateTokens[msg.sender].push(
                Output(
                    true,
                    input.ipfsUrl,
                    input.name,
                    input.desc,
                    newItemId,
                    msg.sender
                )
            );
        } else {
            publicTokens.push(
                Output(
                    false,
                    input.ipfsUrl,
                    input.name,
                    input.desc,
                    newItemId,
                    msg.sender
                )
            );
        }
        _tokenIds.increment();
    }
}

/*Backend endpoints
  save  {
      name, tokenId , description, fileIPTFSUrl, category , isprivate
  }

  view (array of tokenIds, address)
  returns [ {
      name, tokenId , description, fileIPTFSUrl, category, isprivate 
  }]

*/
