import { PhraseContext } from "@/context/seed";
import { useContext } from "react";

export const usePhrase = () => {
  const context = useContext(PhraseContext);
  return context;
};
