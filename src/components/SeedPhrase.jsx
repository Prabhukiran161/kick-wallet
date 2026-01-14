import { ChevronDown, Copy } from "lucide-react";
import { SeedCard } from "./ui/SeedCard";
import { useState } from "react";

export const SeedPhrase = ({ mnemonic }) => {
  const [seedToggle, setSeedToggle] = useState(false);

  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-6 md:px-0">
        {/* Layout */}
        <div className="">
          {/* Seed Phrase */}
          <div className="border border-gray-300/75 rounded-xl p-6 md:p-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-3xl font-semibold">
                Secret Phrase
              </h2>
              <button
                onClick={() => {
                  setSeedToggle(!seedToggle);
                }}
                className="w-8 md:w-12 h-8 md:h-12 p-1 md:p-3 hover:bg-gray-200/30 rounded-xl flex justify-center items-center"
              >
                <ChevronDown
                  strokeWidth={3}
                  className={`w-full h-full transition-transform ${
                    seedToggle ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <div className={`${seedToggle ? "" : "hidden"}`}>
              <div className={`mt-4 flex flex-wrap justify-center gap-4 `}>
                {mnemonic &&
                  mnemonic
                    .split(/\s+/)
                    .map((word, index) => <SeedCard word={word} key={index} />)}
              </div>
              <div className="pt-10 flex items-center gap-2">
                <Copy className="w-4 md:w-6 h-4 md:h-6" strokeWidth={2} />
                <p className="text-sm md:text-base font-light">
                  Click Anywhere To Copy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
