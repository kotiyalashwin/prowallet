import { createContext, Dispatch, SetStateAction } from "react";

export interface phraseContextTypes {
  phrase: string[] | null;
  setPhrase: Dispatch<SetStateAction<string[] | null>>;
}
export const PhraseContext = createContext<phraseContextTypes | null>(null);
