import { createContext, Dispatch, SetStateAction } from "react";

type mnemonicContextType = {
  mneomic: string;
  setMneomonic: Dispatch<SetStateAction<string>>;
};

export const MneomoniContext = createContext<mnemonicContextType>({
  mneomic: "",
  setMneomonic: () => {},
});
