import { WalletsContext } from "@/context/wallets";
import { useContext } from "react";

export const UseWallet = () => {
  const context = useContext(WalletsContext);
  return context;
};
