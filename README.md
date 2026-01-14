# ⚡ Kick — HD Wallet Generator

**Kick** is a simple, browser-based HD (Hierarchical Deterministic) wallet generator that allows users to generate **public/private key pairs** for supported blockchains using a **single recovery phrase (mnemonic)**.

The project is built to understand and demonstrate how wallet generation works internally, rather than hiding everything behind heavy abstractions.

---

## Features

* Supports **multiple blockchains**

  * Solana
  * Ethereum
* Generates **public & private key pairs**
* Uses **BIP-39 mnemonics** (Secret Recovery Phrase)
* Deterministic wallet generation (HD wallets)
* Generate multiple wallets from the same mnemonic
* Persists data using **localStorage**
* Minimal toast notifications for user actions
* Clean, minimal UI (beginner-friendly)

---

## How Wallet Generation Works (Conceptual Flow)

Kick follows the **HD wallet (BIP-based)** approach.

### General Pipeline

```
Mnemonic (Seed Phrase)
        ↓
Master Seed
        ↓
Derivation Path (m/44'/coin_type'/index'/0')
        ↓
Derived Seed
        ↓
Key Pair Generation
        ↓
Blockchain-specific Wallet
```

### Notes

* The **same mnemonic** can generate **multiple wallets**
* Each wallet is generated using a **unique index**
* The internal process differs slightly per blockchain:

  * **Solana** uses Ed25519-based derivation
  * **Ethereum** leverages SDK-level abstractions

---

## User Flow

1. Select a blockchain (Solana / Ethereum)
2. Enter a recovery phrase **or leave blank** to auto-generate
3. Generate the first wallet
4. Add more wallets using the same mnemonic
5. View public/private keys in the UI
6. Optionally delete individual wallets or clear all

---

## Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Crypto Libraries:**

  * `@scure/bip39`
  * `@scure/bip32`
  * `tweetnacl`
  * `@solana/web3.js`
  * `ethers`
* **State Management:** React Hooks
* **Persistence:** Browser `localStorage`

---

## Project Philosophy

* No backend — everything runs **fully in the browser**
* Minimal abstractions for better learning
* Focused on **clarity over over-engineering**
* Built as a **learning-first project**, not a production wallet

> **Disclaimer:**
> This project is for educational purposes only.
> Do **NOT** use generated keys for real funds.

---

## Installation & Setup

```bash
git clone https://github.com/Prabhukiran161/kick-wallet.git
cd kick-wallet
npm install
npm run dev
```

---

## Author

GitHub: [Prabhu Kiran](https://github.com/Prabhukiran161)


