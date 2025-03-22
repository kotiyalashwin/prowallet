import { X } from "lucide-react";
import { Github } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="w-full  py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4">
        <p className="text-lg mb-4 sm:mb-0">
          Developed by <span className="font-semibold">Ashwin</span>
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/kotiyalashwin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github
              className={`h-6 w-6 stroke-${
                theme === "dark" ? "white" : "black"
              }`}
            />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <X
              className={`h-6 w-6 stroke-${
                theme === "dark" ? "white" : "black"
              }`}
            />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
