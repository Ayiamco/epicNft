require("dotenv").config();
async function deploy() {
  let nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  console.log("1...");
  let nftContract = await nftContractFactory.deploy();
  console.log("2...");
  await nftContract.deployed();
  console.log("3...");
  console.log("contract address: ", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #2");
}

const runDeploy = async () => {
  try {
    console.log("starting...");
    await deploy();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runDeploy();
