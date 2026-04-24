import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  await voting.waitForDeployment();

  console.log("Contract deployed successfully!");

  await voting.addCandidate("Alice");
  await voting.addCandidate("Bob");
  await voting.addCandidate("Charlie");

  console.log("Candidates added!");

  await voting.vote(0);

  console.log("Vote casted!");

  const candidates = await voting.getCandidates();

  console.log("\n--- Voting Results ---");

  for (let i = 0; i < candidates.length; i++) {
    const voteCount = await voting.getVotes(i);
    console.log(`${candidates[i]}: ${voteCount}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});