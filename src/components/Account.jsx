import {
  Trash,
  Plus,
  MoveUpRight,
  ArrowRightLeft,
  ArrowDownToLine,
  EyeOff,
  Eye,
  Copy,
  RefreshCcw,
  Timer,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Account = ({ wallet, chain, onDelete, onBalance }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const refreshTimeRef = useRef(null);
  const cooldownTimeRef = useRef(null);

  useEffect(() => {
    return () => {
      if (refreshTimeRef.current) clearTimeout(refreshTimeRef.current);
      if (cooldownTimeRef.current) clearTimeout(cooldownTimeRef.current);
    };
  }, []);

  const handleRefresh = () => {
    if (isRefreshing || cooldown) return;

    setIsRefreshing(true);

    refreshTimeRef.current = setTimeout(() => {
      onBalance(wallet.index, wallet.publicKey);

      setIsRefreshing(false);
      setCooldown(true);

      cooldownTimeRef.current = setTimeout(() => {
        setCooldown(false);
      }, 10000);
    }, 3000);
  };

  const truncateMiddle = (value, start = 5, end = 3) => {
    if (!value) return;
    return `${value.slice(0, start)}...${value.slice(-end)}`;
  };
  return (
    <div className="border border-gray-300/75 w-sm rounded-xl">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="w-46">
          <h2 className="text-3xl mb-2">Account {wallet?.index + 1}</h2>
          <div className="flex justify-between items-center gap-2 mb-2">
            <div className="text-sm">
              Public Key:{" "}
              <span className="truncate">
                {truncateMiddle(wallet?.publicKey)}
              </span>
            </div>
            <div className="w-4 h-4">
              <Copy className="w-full h-full" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="text-sm">
              Private Key:{" "}
              {showPrivateKey ? (
                <span>{truncateMiddle(wallet?.privateKey)}</span>
              ) : (
                <span className="inline-block h-2.5 w-18  rounded bg-[radial-gradient(circle,rgba(0,0,0,0.6)_2px,transparent_1px)] bg-size-[12px_12px]" />
              )}
            </div>
            <div
              onClick={() => setShowPrivateKey(!showPrivateKey)}
              className="w-4 h-4"
            >
              {showPrivateKey ? (
                <Eye className="w-full h-full" strokeWidth={2} />
              ) : (
                <EyeOff className="w-full h-full" strokeWidth={2} />
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => onDelete(wallet.index)}
          className="flex justify-center items-center p-3 hover:bg-gray-200/30 rounded-xl w-10 md:w-11 h-1 md:h-11"
        >
          <Trash color="red" />
        </div>
      </div>
      <div className="bg-gray-200/30 rounded-t-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-base font-thin mb-2">Balance</h3>
          {wallet?.isLoading ? (
            <p className="text-3xl font-light">Fetching...</p>
          ) : (
            <div className="flex justify-center items-center gap-2.5">
              <p className="text-3xl font-light">
                {wallet?.balance} {chain?.currency}
              </p>
              <div
                className={`w-5 h-5 opacity-80 transition-all duration-300 ${
                  isRefreshing || cooldown
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer hover:opacity-100"
                }`}
                onClick={() => handleRefresh()}
              >
                {cooldown ? (
                  <Timer className="w-full h-full animate-pulse" />
                ) : (
                  <RefreshCcw
                    className={`w-full h-full ${
                      isRefreshing ? "animate-spin" : ""
                    }`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-8 justify-center text-center">
          <div>
            <div className="mb-1 bg-(--color-primary) flex justify-center items-center rounded-full w-10 h-10">
              <Plus />
            </div>
            <p className="text-lg">Buy</p>
          </div>
          <div>
            <div className="mb-1 bg-(--color-primary) flex justify-center items-center rounded-full w-10 h-10">
              <MoveUpRight />
            </div>
            <p className="text-lg">Send</p>
          </div>
          <div>
            <div className="mb-1 bg-(--color-primary) flex justify-center items-center rounded-full w-10 h-10">
              <ArrowRightLeft />
            </div>
            <p className="text-lg">Swap</p>
          </div>
          <div>
            <div className="mb-1 bg-(--color-primary) flex justify-center items-center rounded-full w-10 h-10">
              <ArrowDownToLine />
            </div>
            <p className="text-lg">Import</p>
          </div>
        </div>
      </div>
    </div>
  );
};
