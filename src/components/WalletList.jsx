import { WalletItem } from "./WalletItem";

export const WalletList = ({ chain, wallets, onGenerate, onDeleteWallet }) => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 mb-8 md:mb-16">
        {/* Layout */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-4xl font-semibold">{chain?.name}</h2>
            <div>
              <button
                onClick={() => onGenerate()}
                className="bg-black/75 text-white p-2 md:p-3 rounded-lg text-xs md:text-sm mr-2"
              >
                Add Wallet
              </button>
              <button
                onClick={() => onDeleteWallet()}
                className="bg-red-500/80 text-white p-2 md:p-3 rounded-lg text-xs md:text-sm"
              >
                Delete Wallets
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {wallets.map((wallet, index) => (
              <WalletItem
                key={index}
                wallet={wallet}
                onDelete={onDeleteWallet}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
