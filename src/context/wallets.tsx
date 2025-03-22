import { createContext, Dispatch, SetStateAction } from "react";

export type walletsContextTypes = {
  wallets: string[];
  setWallets: Dispatch<SetStateAction<string[]>>;
  addWallet: (wallet: string) => void;
};

export const WalletsContext = createContext<walletsContextTypes>({
  wallets: [],
  setWallets: () => {}, // Provide an empty function as a default
  addWallet: () => {}, // Provide an empty function as a default
});
