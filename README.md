# Decentralized Todo List DApp

A blockchain-based todo list application where tasks are stored permanently on the blockchain. Built with Hardhat, Solidity, and Ethers.js.

## Features

- **Add tasks** to the blockchain
- **Toggle completion status** of tasks
- **Fully decentralized** architecture
- **Transparent** and immutable operations
- **Event-driven** architecture for task updates

## Tech Stack

- **Smart Contracts**: Solidity (0.8.20)
- **Development Framework**: Hardhat
- **Testing**: Mocha + Chai
- **Blockchain Interaction**: Ethers.js

## Usage
 **Compile Contracts**
- `npx hardhat compile`

## Run Tests
- `npx hardhat test`

## Start Local Blockchain
- `npx hardhat node`

## Deploy to Local Network
- `npx hardhat run scripts/deploy.js --network localhost`

## Interact with Contract
- `npx hardhat run scripts/interact.js --network localhost`