import { WalletTypeContext } from "@/context/wallettype";
import { useContext } from "react";

export function useWalletType() {
  const context = useContext(WalletTypeContext);
  return context;
}
