require("dotenv").config();

async function main() {
  // We get the contract to deploy
  const nebula = await hre.ethers.getContractFactory("NebulaNFT");
  const nftContract = await nebula.deploy();

  await nftContract.deployed();

  // Mint another NFT for fun.
  txn = await nftContract.mintToken({
    isPrivate: false,
    ipfsUrl: "localhost",
    name: "Nft 1",
    desc: "This is first nft",
  });
  await txn.wait();
  console.log("just mined #1 NebulaNFT");

  txn = await nftContract.mintToken({
    isPrivate: false,
    ipfsUrl: "localhost",
    name: "Nft 2",
    desc: "This is second nft",
  });
  await txn.wait();
  console.log("just mined #2 epicNFT");

  console.log(await nftContract.publicTokens(0));
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
