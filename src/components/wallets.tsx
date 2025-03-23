import { Button } from "./ui/button";
import { Wallet } from "./wallet";
import { UseWallet } from "@/hooks/useWallet";
import { newSolanaWallet } from "@/utils/solanaGen";
import { useMneomonic } from "@/hooks/useMneomonic";
import { useWalletType } from "@/hooks/useWalletType";
import { newEthWallet } from "@/utils/ethGen";
import { useState } from "react";

export const Wallets = () => {
  const [solanaIndex, setSolanaIndex] = useState(0);
  const [ethIndex, setEthIndex] = useState(0);
  const walletsContext = UseWallet(); // Use useContext directly
  // const phraseContext = usePhrase();
  // const walletTpe = useWalletType();
  const mneomonic = useMneomonic();
  const walletType = useWalletType();

  if (!walletType) return;

  const genWallet = async () => {
    let publicKey;
    if (walletType.walletType === "solana") {
      publicKey = await newSolanaWallet(mneomonic.mneomic, solanaIndex);
      setSolanaIndex((s) => s + 1);
    } else {
      publicKey = await newEthWallet(mneomonic.mneomic, ethIndex);
      setEthIndex((s) => s + 1);
    }
    if (publicKey) {
      walletsContext.addWallet(publicKey);
    }
  };

  if (!walletsContext) {
    return <div>Wallets context not available.</div>; // Handle case where context is missing
  }

  return (
    <div className="w-[75vw] mt-8  space-y-4 ">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold tracking-widest">Wallets:</p>
        <Button onClick={genWallet}>Add New</Button>
      </div>
      <div className=" overflow-y-auto max-h-[30vh]">
        {walletsContext.wallets.length != 0 ? (
          walletsContext.wallets.map((el) => {
            return (
              <Wallet publicKey={el} defaultOpen={false}>
                <p></p>
              </Wallet>
            );
          })
        ) : (
          <div className="p-4 text-center text-xl mt-4 border rounded-xl  drop-shadow-md divide-rose-50 ">
            No wallets Generated.Click on{" "}
            <span className="font-semibold text-pink-700">Add Wallet</span>.
          </div>
        )}
      </div>
    </div>
  );
};
