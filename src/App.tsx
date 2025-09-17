import { Themetoggle } from "./components/ThemeToggle";
import { GameBoard } from "./components/GameBoard";

export default function App() {
  return (
    <div className="bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <Themetoggle />
      <GameBoard />
    </div>
  );
}
