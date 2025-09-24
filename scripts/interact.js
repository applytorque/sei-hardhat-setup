import hre from "hardhat";

async function main() {
  // Replace with your deployed contract address
  const contractAddress = "0xA6A65f98BdB357129b768A7e0Fa5EF54Ace880c9";
  
  // Get the contract instance
  const HelloSei = await hre.ethers.getContractFactory("HelloSei");
  const helloSei = HelloSei.attach(contractAddress);
  
  // Read current message
  console.log("Current message:", await helloSei.getMessage());
  
  // Update the message
  console.log("Updating message...");
  const tx = await helloSei.updateMessage("Hello from interaction script!");
  await tx.wait();
  
  // Read updated message
  console.log("Updated message:", await helloSei.getMessage());
  
  // Get owner
  console.log("Contract owner:", await helloSei.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });