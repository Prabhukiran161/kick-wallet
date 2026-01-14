import { ICONS } from "./icons";
import { createSolanaAccount } from "../services/solana";
import { createEthereumAccount } from "../services/ethereum";

export const BLOCKCHAINS = [
  {
    name: "Solana",
    image: ICONS.solana,
    generateWallet: createSolanaAccount,
  },
  {
    name: "Ethereum",
    image: ICONS.ethereum,
    generateWallet: createEthereumAccount,
  },
];
