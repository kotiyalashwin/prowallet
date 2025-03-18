import { createContext, Dispatch, SetStateAction } from "react";

interface contextTpes {
  walletGenerated: boolean;
  setWalletGenerated: Dispatch<SetStateAction<boolean>>;
}

export const WalletGeneratedContext = createContext<contextTpes | null>(null);
