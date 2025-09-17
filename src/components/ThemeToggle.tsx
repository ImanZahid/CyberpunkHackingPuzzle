import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export function Themetoggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-[hsl(var(--color-accent))]"
      />

      <span className="text-sm">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}
