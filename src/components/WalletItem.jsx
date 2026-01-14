import { Trash, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const WalletItem = ({ wallet, onDelete }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  return (
    <div className="border border-gray-300/75 rounded-lg w-80 md:w-7xl">
      <div className="flex justify-between items-center p-4 md:p-8">
        <h3 className="text-lg md:text-3xl font-medium">
          Wallet {wallet?.index + 1}
        </h3>
        <button
          onClick={() => onDelete(wallet.index)}
          className="flex justify-center items-center p-3 hover:bg-gray-200/30 rounded-xl w-10 md:w-11 h-1 md:h-11"
        >
          <Trash color="red" />
        </button>
      </div>
      <div className="bg-gray-200/30 p-4 md:p-8 rounded-t-2xl overflow-hidden">
        <div className="mb-4">
          <h4 className="text-sm md:text-2xl font-semibold mb-2">Public Key</h4>
          <p className="text-xs md:text-base font-normal truncate">
            {wallet?.publicKey}
          </p>
        </div>
        <div>
          <h4 className="text-sm md:text-2xl font-semibold">Private Key</h4>
          <div className="flex justify-between items-center gap-4">
            {showPrivateKey ? (
              <p className="text-xs md:text-base font-normal w-55 md:w-full truncate">
                {wallet.privateKey}
              </p>
            ) : (
              <div className="h-2 md:h-3 w-55 md:w-3xl rounded bg-[radial-gradient(circle,rgba(0,0,0,0.6)_2px,transparent_1px)] bg-size-[12px_12px]" />
            )}

            <div
              onClick={() => setShowPrivateKey(!showPrivateKey)}
              className="p-3 md:p-3 hover:bg-gray-200/30 rounded-xl w-10 md:w-12 h-10 md:h-12"
            >
              {showPrivateKey ? (
                <Eye className="w-full h-full" strokeWidth={2} />
              ) : (
                <EyeOff className="w-full h-full" strokeWidth={2} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
