import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  // Deploy HelloSei contract
  const HelloSei = await hre.ethers.getContractFactory("HelloSei");
  const helloSei = await HelloSei.deploy("Hello from Sei blockchain!");

  await helloSei.waitForDeployment();

  console.log("HelloSei deployed to:", await helloSei.getAddress());
  console.log("Initial message:", await helloSei.getMessage());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });