import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from "./theme-provider";
import { SeedBox } from "./seedBox";

export const ShowSeedPhrase = () => {
  const { theme } = useTheme();
  return (
    <Dialog>
      <DialogTrigger
        className={` ${
          theme === "dark" ? "border-2 border-white" : "border-black border-2"
        } inline p-2 rounded-md cursor-pointer`}
      >
        Show SeedPhrase
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Current SeedPhrase:</DialogTitle>
          <div className="mt-4">
            <SeedBox />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
