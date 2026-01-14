import { BLOCKCHAINS } from "../constants/blockchain";
import { WalletCard } from "./ui/WalletCard";
export const ChainSelector = ({ onSelect }) => {
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto py-8 md:py-16">
        {/* Layout */}
        <div className="px-4 md:px-0">
          <h1 className="text-xl md:text-5xl font-semibold mb-2 md:mb-4 text-center">
            Supports multiple blockchains
          </h1>
          <p className="text-sm md:text-xl text-center mb-4">
            Choose a blockchain to get started.
          </p>
          <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-4 px-4">
            {BLOCKCHAINS.map((item) => (
              <WalletCard
                key={item.name}
                name={item.name}
                image={item.image}
                onClick={() => onSelect(item.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
