import { generateMnemonic, mnemonicToSeedSync } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/czech.js";
import { HDKey } from "@scure/bip32";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export const createSolanaAccount = (index, mnemonic) => {
  const words = mnemonic || generateMnemonic(wordlist);

  const masterSeed = mnemonicToSeedSync(words);

  const hd = HDKey.fromMasterSeed(masterSeed);

  const derivationPath = `m/44'/501'/${index}'/0'`;

  const derivedSeed = hd.derive(derivationPath);

  const naclKeypair = nacl.sign.keyPair.fromSeed(derivedSeed.privateKey);

  const solanaKeypair = Keypair.fromSecretKey(naclKeypair.secretKey);

  return {
    mnemonic: words,
    publicKey: solanaKeypair.publicKey.toBase58(),
    privateKey: bs58.encode(naclKeypair.secretKey),
  };
};
