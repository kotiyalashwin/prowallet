import { MneomoniContext } from "@/context/mneomonicContext";
import { useContext } from "react";

export const useMneomonic = () => {
  const context = useContext(MneomoniContext);
  return context;
};
