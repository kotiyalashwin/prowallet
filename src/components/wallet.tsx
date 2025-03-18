import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Wallet = ({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border rounded-md mb-2">
      <div className="flex items-center justify-between p-4">
        {/* The heading is not clickable */}
        <div>
          <span className="text-neutral-500 text-sm">Public Key</span>
          <h3 className="text-sm font-medium">00012hf7a72bf9a9fg</h3>
        </div>

        {/* Only the arrow is clickable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-1 hover:bg-muted transition-colors"
          aria-expanded={isOpen}
          aria-controls={`content-${"hello"
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen ? "transform rotate-180" : ""
            )}
          />
          <span className="sr-only">Toggle</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="px-4 pb-4 pt-0"
          id={`content-${"hello".replace(/\s+/g, "-").toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
