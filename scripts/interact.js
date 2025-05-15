import hre from "hardhat";

const { ethers } = hre;

async function main() {
  const VotingFactory = await ethers.getContractFactory("Voting");
  const VotingDelpoy = await VotingFactory.deploy();
  await VotingDelpoy.createPoll("Favorite Language?", [
    "Solidity, Rust",
    "JavaScript",
  ]);
  await VotingDelpoy.vote(0, 1);
  const results = await VotingDelpoy.getPollResults(0)
  console.log('Voting results:',results)
}

main().catch((error) => {
  console.error(error);
});
