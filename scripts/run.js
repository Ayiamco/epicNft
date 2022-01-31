const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const myEpicNFT = await hre.ethers.getContractFactory("MyEpicNFT");
  const _myEpicNFT = await myEpicNFT.deploy();

  await _myEpicNFT.deployed();
  console.log("MyEpicNFT  deployed to:", _myEpicNFT.address);
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
