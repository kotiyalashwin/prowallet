import { useContext, useState } from "react";
import { InputSeedPhrase } from "./input-seedphrase";
import { useTheme } from "./theme-provider";
import { ButtonGenerateWallet } from "./button-generateWallet";
import { PhraseContext } from "@/context/phraseContext";
import { useMneomonic } from "@/hooks/useMneomonic";

export const UserSeedPhrase = () => {
  const { theme } = useTheme();
  const phrase = useContext(PhraseContext);
  const mnemonicContext = useMneomonic();

  const [seedphrase, setSeedPhrase] = useState<string[]>(Array(12).fill(""));

  const SetSeedPhrase = (value: string, index: number) => {
    const newValues = [...seedphrase];
    newValues[index] = value;
    setSeedPhrase(newValues);
  };

  const seedPhraseContext = () => {
    if (phrase) {
      const setContextSeedPhrase = phrase.setPhrase;
      setContextSeedPhrase(seedphrase);
      mnemonicContext.setMneomonic(seedphrase.join(" "));
    }
  };

  return (
    <div className="flex  flex-col space-y-4 items-center h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 opacity-0 animate-fade-in w-full">
        {Array.from({ length: 12 }).map((_el, i) => {
          return (
            <div
              className={` ${
                theme === "dark"
                  ? "bg-gray-800/65"
                  : "bg-white border-black border"
              }  rounded-md text-xl flex items-center pl-2`}
            >
              <span className="opacity-75 text-sm">{i + 1}.</span>
              <InputSeedPhrase change={SetSeedPhrase} index={i} />
            </div>
          );
        })}
      </div>
      {seedphrase.every((value) => value !== "") && (
        <div onClick={seedPhraseContext} className="animate-fade-in">
          <ButtonGenerateWallet />
        </div>
      )}
    </div>
  );
};
