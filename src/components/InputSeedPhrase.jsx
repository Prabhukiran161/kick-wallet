import { useState } from "react";

export const InputSeedPhrase = ({ onGenerate }) => {
  const [input, setInput] = useState("");
  return (
    <section className="w-full">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto py-8 md:py-16">
        {/* Layout */}
        <div className="px-6 md:px-0">
          <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4 text-center">
            Secret Recovery Phrase
          </h1>
          <p className="text-base md:text-xl text-center mb-4">
            Save these words in a safe place.
          </p>
          <div className="max-w-5xl mx-auto border border-gray-300 rounded-xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Enter your secret phrase (or leave blank to generate)"
                className="bg-gray-100 w-full md:h-12 text-xs md:text-base rounded-xl py-2.5 px-4 border border-black/30 focus:outline-4 focus: outline-offset-2 focus:outline-black/50 resize-none"
              ></textarea>
              <button
                onClick={() => onGenerate(input.trim())}
                className="bg-black text-white hover:bg-black/85 hover:transition-transform hover:ease-in-out hover:scale-105 px-6 py-2 text-sm md:text-lg rounded-2xl mx-auto"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
