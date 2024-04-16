import hre from "hardhat";

async function main() {
  console.log("Deploying...");
  const Token = await hre.ethers.getContractFactory("MockERC20Token");
  const token = await Token.deploy(
    "Test USDC",
    "tUSDC",
    "1000000000000000000000000000"
  );

  console.log("Contract deployed at:", await token.getAddress());
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
