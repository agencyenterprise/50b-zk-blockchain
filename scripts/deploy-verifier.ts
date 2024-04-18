import hre from "hardhat";

async function main() {
  console.log("Deploying...");
  const Verifier = await hre.ethers.getContractFactory("PlonkVerifier");
  const verifier = await Verifier.deploy();

  console.log("Contract deployed at:", await verifier.getAddress());
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
