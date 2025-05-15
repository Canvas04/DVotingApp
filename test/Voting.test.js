import chai from "chai";
import hre from "hardhat";

const { expect } = chai;
const { ethers } = hre;

describe("Voting System", () => {
  let votingInstance;
  let owner, user;

  before(async () => {
    [owner, user] = await ethers.getSigners();
    const VotingFactory = await ethers.getContractFactory("Voting",owner);
    votingInstance = await VotingFactory.deploy();
  });

  it("Should create a poll", async () => {
    await votingInstance
      .connect(owner)
      .createPoll("Best Blockchain?", ["Ethereum", " Solana"]);

    const poll = await votingInstance.getPoll(0);
    expect(poll.question).to.equal('Best Blockchain?')
  });

  it('Should allow voting', async () => {
    await votingInstance.connect(user).vote(0,1);
    const votes = await votingInstance.getPollResults(0);
    expect(votes[1]).to.equal(1)
  })

});
