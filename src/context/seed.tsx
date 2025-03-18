import { createContext, Dispatch, SetStateAction } from "react";

interface contextTypes {
  phrase: string[] | null;
  setPhrase: Dispatch<SetStateAction<string[] | null>>;
}
export const PhraseContext = createContext<contextTypes | null>(null);
