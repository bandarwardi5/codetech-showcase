import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("codetech-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("codetech-theme", "light");
    }
  };


  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      className={`relative inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-foreground/80 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-primary ${className}`}
      title={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
    >
      {isDark ? (
        <Sun className="size-4.5 transition-transform duration-300 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="size-4.5 transition-transform duration-300 hover:-rotate-12 text-blue-600" />
      )}
    </button>
  );
}
