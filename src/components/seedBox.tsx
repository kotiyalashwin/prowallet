import { PhraseContext } from "@/context/phraseContext";
import { useContext } from "react";
import { useTheme } from "./theme-provider";

export const SeedBox = () => {
  const phraseContext = useContext(PhraseContext);
  const { theme } = useTheme();

  if (phraseContext) {
    const { phrase } = phraseContext;
    return (
      <div className="flex  flex-col space-y-4 items-center h-full">
        <div className="grid grid-cols-3 grid-rows-4 gap-4 opacity-0 animate-fade-in w-full">
          {phrase?.map((el) => {
            return (
              <div
                className={` ${
                  theme === "dark"
                    ? "bg-gray-800/65"
                    : "bg-white border-black border"
                }  rounded-md text-xl text-center p-4`}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>No Seed Phrase </div>;
};
