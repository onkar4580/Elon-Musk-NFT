const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ElonNFT = await hre.ethers.getContractFactory("ElonNFT");
  const ElonNFTDeployed = await ElonNFT.deploy("ElonMusk","ELON");

  await ElonNFTDeployed.deployed();
  console.log("ElonNFT deployed to:", ElonNFTDeployed.address);
  
  let txn = await ElonNFTDeployed.mintNFT();
  await txn.wait();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
