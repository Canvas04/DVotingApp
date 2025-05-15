import hre from "hardhat";

const { ethers } = hre;

async function main() {
  const VotingFactory = await ethers.getContractFactory("Voting");
  const VotingDeploy = await VotingFactory.deploy();
  await VotingDeploy.waitForDeployment();
  console.log("Voting deployed to:", await VotingDeploy.getAddress());
}

main().catch(error => {
    console.error(error)
})