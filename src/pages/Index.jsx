import { ChainSelector } from "../components/ChainSelector";
import { InputSeedPhrase } from "../components/InputSeedPhrase";
import { SeedPhrase } from "../components/SeedPhrase";
import { WalletList } from "../components/WalletList";
import { useHDWallet } from "../hooks/useHDWallet";
import { useState } from "react";
import { ToastContainer } from "../components/ToastContainer";

export const Index = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const {
    selectedChain,
    mnemonic,
    wallets,
    selectBlockchain,
    addWallet,
    deleteWallet,
    fetchBalanceWallet,
  } = useHDWallet(showToast);

  return (
    <>
      {/* 1. Show ChainSelector - Only if chain is not selected*/}
      {!selectedChain && <ChainSelector onSelect={selectBlockchain} />}
      {/* 2. Show InputSeedPhrase - Only if chain is selected */}
      {selectedChain && wallets.length === 0 && (
        <InputSeedPhrase onGenerate={addWallet} />
      )}
      {/* 3. Show Wallet - Only after generateWallet()  */}
      {wallets.length > 0 && (
        <>
          <SeedPhrase mnemonic={mnemonic} />
          <WalletList
            chain={selectedChain}
            wallets={wallets}
            onGenerate={addWallet}
            onDeleteWallet={deleteWallet}
            onFetchBalance={fetchBalanceWallet}
          />
        </>
      )}
      <ToastContainer toasts={toasts} />
    </>
  );
};
