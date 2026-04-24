# 🗳️ Decentralized Blockchain Voting Application

This project is a **Decentralized Voting System** built using **Blockchain Technology** and **Smart Contracts**.  
It ensures **transparency, security, and immutability** in the voting process.

---

## 🚀 Project Overview

Traditional voting systems are centralized and prone to manipulation.  
This project solves that problem by implementing a **blockchain-based voting system**, where:

- Votes are stored on the blockchain
- Data cannot be modified once recorded
- No central authority controls the system

---

## ⚙️ Features

- ✅ Add candidates dynamically
- ✅ Secure voting mechanism
- ✅ One vote per user (can be extended)
- ✅ Transparent result calculation
- ✅ Immutable vote records
- ✅ Fully decentralized execution

---

## 🧠 How It Works

1. A **Smart Contract** is deployed on the blockchain
2. Candidates are added using contract functions
3. Users cast votes through the contract
4. Votes are stored permanently on blockchain
5. Results are fetched directly from contract

---

## 🛠️ Tech Stack

- **Solidity** → Smart Contract development
- **Hardhat** → Blockchain development environment
- **JavaScript** → Interaction script
- **Node.js** → Runtime environment

---

## 📁 Project Structure
blockchain/
│
├── contracts/
│ └── Voting.sol
│
├── scripts/
│ └── run.js
│
├── hardhat.config.js
├── package.json
├── README.md

---

## ▶️ How to Run the Project

```bash
npm install
npx hardhat compile
npx hardhat run scripts/run.js
