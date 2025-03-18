import { useState } from "react";
import { Button } from "./ui/button";
import { Wallet } from "./wallet";

type walletInfo = {
  publicKey: string;
  privateKey: string;
};

export const Wallets = () => {
  const [wallets, setWallets] = useState<walletInfo[]>([]);

  return (
    <div className="w-full mt-8 h-full space-y-4 ">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold tracking-widest">Wallets:</p>
        <Button>Add New</Button>
      </div>
      <div>
        {Array.from({ length: 3 }).map((el) => {
          return <Wallet defaultOpen={false}>Private key</Wallet>;
        })}
      </div>
    </div>
  );
};
