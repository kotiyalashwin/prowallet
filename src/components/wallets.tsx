import { Button } from "./ui/button";
import { Wallet } from "./wallet";

export const Wallets = () => {
  return (
    <div className="w-full mt-8 h-full space-y-4 ">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold tracking-widest">Wallets:</p>
        <Button>Add New</Button>
      </div>
      <div>
        {Array.from({ length: 3 }).map(() => {
          return <Wallet defaultOpen={false}>Private key</Wallet>;
        })}
      </div>
    </div>
  );
};
