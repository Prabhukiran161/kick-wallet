import { useCallback, useEffect, useState, useRef } from "react";
import { BLOCKCHAINS } from "../constants/blockchain";
import { useLocalStorage } from "./useLocalStorage";

export const useHDWallet = (showToast) => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState([]);
  const indexRef = useRef(0);
  const hasRestored = useRef(false);
  const { set, get } = useLocalStorage();

  //Save to LocalStorage
  useEffect(() => {
    if (!hasRestored.current) return;
    set(
      "wallet-data",
      JSON.stringify({
        selectedChainName: selectedChain?.name || null,
        mnemonic,
        wallets,
      })
    );
  }, [selectedChain, mnemonic, wallets, set]);

  //Get from LocalStorage
  useEffect(() => {
    const saved = get("wallet-data");
    if (!saved) {
      hasRestored.current = true;
      return;
    }
    try {
      const parsed = JSON.parse(saved);
      if (parsed.selectedChainName) {
        const chain = BLOCKCHAINS.find(
          (chain) => chain.name === parsed.selectedChainName
        );
        setSelectedChain(chain || null);
      } else {
        setSelectedChain(null);
      }
      setMnemonic(parsed.mnemonic || "");
      setWallets(parsed.wallets || []);
    } catch (error) {
      console.error("Failed to parse wallet-data", error);
    } finally {
      hasRestored.current = true;
    }
  }, [get]);

  //Blockchain Selector
  const selectBlockchain = useCallback(
    (chainName) => {
      const chain = BLOCKCHAINS.find((chain) => chain.name == chainName);
      setSelectedChain(chain);
      showToast("Blockchain selected. Please generate a wallet.");
      setWallets([]);
      setMnemonic("");
    },
    [showToast]
  );

  //Fetch balance
  const fetchBalanceWallet = useCallback(
    async (walletIndex, publicKey) => {
      try {
        const balance = await selectedChain.fetchBalance(publicKey);
        console.log("Fetching");

        setWallets((prev) =>
          prev.map((w) =>
            w.index === walletIndex ? { ...w, balance, isLoading: false } : w
          )
        );
      } catch (error) {
        console.error("Failed to fetch Balance", error);

        setWallets((prev) =>
          prev.map((w) =>
            w.index === walletIndex
              ? { ...w, balance: "-", isLoading: false }
              : w
          )
        );
      }
    },
    [selectedChain]
  );

  //Add Wallet
  const addWallet = useCallback(
    (inputMnemonic = "") => {
      if (!selectedChain) return;

      const indexWallet = indexRef.current;
      const { generateWallet } = selectedChain;

      const result = generateWallet(indexWallet, inputMnemonic || mnemonic);

      setMnemonic(result.mnemonic);

      const wallet = {
        index: indexWallet,
        publicKey: result.publicKey,
        privateKey: result.privateKey,
        balance: null,
        isLoading: true,
      };

      setWallets((prev) => [...prev, wallet]);
      fetchBalanceWallet(indexWallet, wallet.publicKey);

      indexRef.current += 1;

      showToast("Wallet generated successfully!");
    },
    [selectedChain, mnemonic, showToast, fetchBalanceWallet]
  );

  //Delete Wallet
  const deleteWallet = useCallback(
    (walletIndex = null) => {
      if (walletIndex === null) {
        setWallets([]);
        setMnemonic("");
        setSelectedChain(null);
        indexRef.current = 0;
        showToast("All Wallets deleted successfully.");
        return;
      }
      setWallets((prevWallets) => {
        const updatedWallets = prevWallets.filter(
          (wallet) => wallet.index !== walletIndex
        );

        if (updatedWallets.length === 0) {
          setMnemonic("");
          setSelectedChain(null);
        }
        return updatedWallets;
      });
      showToast("Wallet deleted successfully.");
    },
    [showToast]
  );

  return {
    // States
    selectedChain,
    mnemonic,
    wallets,
    // Actions
    selectBlockchain,
    addWallet,
    deleteWallet,
    fetchBalanceWallet
  };
};
