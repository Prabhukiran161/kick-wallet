import { ICONS } from "./icons";
import { createSolanaAccount } from "../services/solana";
import { fetchSolanaBalance } from "../services/rpc/solana";
import { createEthereumAccount } from "../services/ethereum";
import { fetchEthereumBalance } from "../services/rpc/ethereum";

export const BLOCKCHAINS = [
  {
    name: "Solana",
    image: ICONS.solana,
    generateWallet: createSolanaAccount,
    fetchBalance: fetchSolanaBalance,
    currency: "SOL",
  },
  {
    name: "Ethereum",
    image: ICONS.ethereum,
    generateWallet: createEthereumAccount,
    fetchBalance: fetchEthereumBalance,
    currency: "ETH",
  },
];
