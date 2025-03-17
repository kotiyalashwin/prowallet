import { useState } from "react";

type props = {
  index: number;
  change: (value: string, index: number) => void;
};

export const InputSeedPhrase = ({ change, index }: props) => {
  const [localValue, setLocalValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    change(e.target.value, index);
    setLocalValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="w-full outline-none p-2"
        value={localValue}
        onChange={handleChange}
      />
    </div>
  );
};
