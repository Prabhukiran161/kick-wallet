import { RPC } from "../../config/env";
export const fetchEthereumBalance = async (address) => {
  const result = await fetch(RPC.ETHEREUM, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "1",
      method: "eth_getBalance",
      params: [address, "latest"],
    }),
  });

  const data = await result.json();
  return parseInt(data.result, 16) / 1e18;
};
