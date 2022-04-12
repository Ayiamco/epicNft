require("dotenv").config();

async function main() {
  // We get the contract to deploy
  const myEpicNFT = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await myEpicNFT.deploy();

  await nftContract.deployed();
  // console.log("MyEpicNFT  deployed to:", nftContract.address);
  // console.log("Alchemy API key: ", process.env.ALCHEMY_API_KEY);
  // console.log("Wallet private key: ", process.env.WALLET_PRIVATE_KEY);

  // // Call the function.
  // let txn = await nftContract.makeAnEpicNFT();
  // // Wait for it to be mined.
  // await txn.wait();
  // console.log("just mined #1 epicNFT");

  // Mint another NFT for fun.
  txn = await nftContract.mintToken({
    isPrivate: true,
    ipfsUrl: "",
    name: "tttt",
    desc: "yyyyyyyyyyyyyy",
  });
  // Wait for it to be mined.
  await txn.wait();
  console.log("names: ", await nftContract.names());
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
