// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    struct Poll {
        string question;
        string[] options;
        uint256[] votes;
    }

    Poll[] public polls;
    address public owner;

    event PollCreated(uint256 pollId,string question);
    event Voted(uint256, uint256 optionId);

    constructor() {
        owner = msg.sender;
    }

    function createPoll(string memory _question,string[] memory _options) external{
      require(msg.sender == owner,"Only owner can create polls");
      polls.push(Poll(_question, _options, new uint256[](_options.length)));
      emit PollCreated(polls.length - 1, _question);
    }

    function vote(uint256 _pollId,uint256 _optionId) external{
        require(_pollId < polls.length,"Invalid poll ID");
        require(_optionId < polls[_pollId].options.length,"Invalid options");

        polls[_pollId].votes[_optionId]++;
        emit Voted(_pollId,_optionId);
    }

    function getPollResults(uint256 _pollId) external view returns(uint256[] memory) {
        require(_pollId < polls.length, "Invalid poll ID");
        return polls[_pollId].votes;
    }
    
    function getPoll(uint256 _pollId) external view returns (string memory question,string[] memory options,
    uint256[] memory votes
    ){
        require(_pollId < polls.length, "Invalid poll ID");
     Poll storage poll = polls[_pollId];
     return (poll.question,poll.options,poll.votes);
    }
}