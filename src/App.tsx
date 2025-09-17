import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] min-h-screen flex flex-col items-center justify-center gap-6">
      <button className="bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] px-6 py-3 rounded-[var(--radius)] hover:opacity-80 transition">
        Hack Node
      </button>

      <div className="flex items-center gap-3">
        <Switch
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
          className="data-[state=checked]:bg-[hsl(var(--color-primary))]"
        />
        <span className="text-sm">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}
