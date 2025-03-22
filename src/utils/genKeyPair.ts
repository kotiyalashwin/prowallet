import * as bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
export const generateKeyPair = async (phrase: string[]) => {
  const mneomonic = phrase?.join(" ");
  if (!mneomonic) return;
  const seed = await bip39.mnemonicToSeedSync(mneomonic, "");
  const keypair = await Keypair.fromSeed(seed.subarray(0, 32));
  console.log(keypair.publicKey.toBase58());
  return keypair.publicKey.toBase58();
};
