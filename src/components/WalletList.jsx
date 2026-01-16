import { WalletItem } from "./WalletItem";
import { Account } from "./Account";

export const WalletList = ({ chain, wallets, onGenerate, onDeleteWallet, onFetchBalance }) => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 mb-8 md:mb-16">
        {/* Layout */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <img className="w-10 h-10" src={chain?.image} alt={chain?.name} />
              <h2 className="text-xl md:text-4xl font-semibold">
                {chain?.name}
              </h2>
            </div>
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
              <Account key={index} wallet={wallet} chain={chain} onDelete={onDeleteWallet} onBalance={onFetchBalance} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
