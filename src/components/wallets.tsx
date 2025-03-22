import { Button } from "./ui/button";
import { Wallet } from "./wallet";
import { usePhrase } from "@/hooks/usePhrase";
import { generateKeyPair } from "@/utils/genKeyPair";
import { UseWallet } from "@/hooks/useWallet";

export const Wallets = () => {
  const walletsContext = UseWallet(); // Use useContext directly
  const phraseContext = usePhrase();

  const genWallet = async () => {
    if (!phraseContext?.phrase) return;
    const publicKey = await generateKeyPair(phraseContext?.phrase);
    if (publicKey) {
      walletsContext.addWallet(publicKey);
    }
  };

  if (!walletsContext) {
    return <div>Wallets context not available.</div>; // Handle case where context is missing
  }

  return (
    <div className="w-full mt-8 h-full space-y-4 ">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold tracking-widest">Wallets:</p>
        <Button onClick={genWallet}>Add New</Button>
      </div>
      <div>
        {walletsContext.wallets.length != 0 ? (
          walletsContext.wallets.map((el) => {
            return (
              <Wallet publicKey={el} defaultOpen={false}>
                Private Key Will come here
              </Wallet>
            );
          })
        ) : (
          <div className="p-4 text-center text-xl mt-4 border rounded-full ">
            No wallets Generated.Click on{" "}
            <span className="font-semibold">Add Wallet</span>.
          </div>
        )}
      </div>
    </div>
  );
};
