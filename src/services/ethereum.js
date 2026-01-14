import { HDNodeWallet, Mnemonic, Wallet } from "ethers";
import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";

export const createEthereumAccount = (index, mnemonic="") => {
    const words = mnemonic || generateMnemonic(wordlist);

    const ethMnemonic = Mnemonic.fromPhrase(words);

    const derivationPath = `m/44'/60'/${index}'/0'`;

    const wallet = HDNodeWallet.fromMnemonic(ethMnemonic,derivationPath);

    return {
        mnemonic: words,
        publicKey: wallet.address,
        privateKey: wallet.privateKey
    };
}