import { useContext } from "react";
import { Button } from "./ui/button";
import { WalletGeneratedContext } from "@/context/walletGen";

export const ButtonGenerateWallet = () => {
  const walletContext = useContext(WalletGeneratedContext);

  if (walletContext) {
    const { setWalletGenerated } = walletContext;
    return (
      <Button
        onClick={() => {
          setWalletGenerated(true);
        }}
      >
        Generate Wallet
      </Button>
    );
  }
};
