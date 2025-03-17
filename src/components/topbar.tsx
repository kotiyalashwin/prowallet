import { Globe } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const TopBar = () => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="font-bold text-3xl flex items-center ">
        <Globe size={40} className="mr-3 animate-fade-in" />
        ProWallet
      </h1>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
