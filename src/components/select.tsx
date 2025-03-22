import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWalletType } from "@/hooks/useWalletType";

export const SelectType = () => {
  const walletTypeContext = useWalletType();

  if (!walletTypeContext) {
    return <>Try Again</>;
  }

  const handleChange = (value: string) => {
    walletTypeContext.setWalletType(value);
  };

  return (
    <div className="pt-2">
      <Select defaultOpen onValueChange={(vale) => handleChange(vale)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Wallet" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="solana">Solana</SelectItem>
          <SelectItem value="ethereum">Ethereum</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
