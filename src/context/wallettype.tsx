import { createContext, Dispatch, SetStateAction } from "react";

type WalletTypeContextType = {
  walletType: string;
  setWalletType: Dispatch<SetStateAction<string>>;
};

export const WalletTypeContext = createContext<WalletTypeContextType>({
  walletType: "",
  setWalletType: () => {},
});
