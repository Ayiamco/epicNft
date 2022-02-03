const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const myEpicNFT = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await myEpicNFT.deploy();

  await _myEpicNFT.deployed();
  console.log("MyEpicNFT  deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const RunMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

RunMain();
