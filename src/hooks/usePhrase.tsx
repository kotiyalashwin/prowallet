import { PhraseContext } from "@/context/phraseContext";
import { useContext } from "react";

export const usePhrase = () => {
  const context = useContext(PhraseContext);
  return context;
};
