import { RPC } from "../../config/env";
export const fetchSolanaBalance = async (address) => {
  const result = await fetch(RPC.SOLANA, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getBalance",
      params: [address],
    }),
  });
  const data = await result.json();
  return data.result.value / 1e9;
};
