import { Moon, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/useTheme";

export default function ThemeButton() {

    const { pathname } = useLocation();
    const { isDark, toggleTheme } = useTheme();

    const showButton = ["/", "/login", "/register"].includes(pathname);

    if (!showButton) return null;

    return (
        <button onClick={toggleTheme} className="fixed z-50 top-9 md:top-6 right-10 md:right-6 border
         border-[#dcdec1] dark:border-[#4f4f4b] rounded-lg px-3 py-3 dark:hover:bg-neutral-700
          hover:bg-neutral-100 flex items-centertext-neutral-500 hover:text-neutral-700
           dark:text-gray-200 dark:hover:text-white cursor-pointer">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}