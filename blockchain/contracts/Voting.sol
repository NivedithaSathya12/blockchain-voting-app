// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    string[] public candidates;
    mapping(uint => uint) public votes;

    function addCandidate(string memory name) public {
        candidates.push(name);
    }

    function vote(uint index) public {
        votes[index]++;
    }

    function getCandidates() public view returns (string[] memory) {
        return candidates;
    }

    function getVotes(uint index) public view returns (uint) {
        return votes[index];
    }
}