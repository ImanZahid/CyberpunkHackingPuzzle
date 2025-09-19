import { useEffect, useState } from "react";
import { Node } from "./Node";

type Status = "idle" | "preview" | "playing" | "won" | "lost";

export function GameBoard() {
  const totalNodes = 16;
  const [sequence, setSequence] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [timeLeft, setTimeLeft] = useState(20);

  // generate sequence when game starts
  const startGame = () => {
    const ids = Array.from({ length: totalNodes }, (_, i) => i + 1);
    const randomSeq = ids.sort(() => 0.5 - Math.random()).slice(0, 6); // start with 6 nodes
    setSequence(randomSeq);
    setCurrentStep(0);
    setStatus("preview");
    setTimeLeft(20);
  };

  useEffect(() => {
    if (status !== "playing") return;
    if (timeLeft <= 0) {
      setStatus("lost");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [status, timeLeft]);

  useEffect(() => {
    if (status === "preview") {
      const previewTime = sequence.length * 1000;
      const t = setTimeout(() => setStatus("playing"), previewTime);
      return () => clearTimeout(t);
    }
  }, [status, sequence]);

  const handleNodeClick = (id: number) => {
    if (status !== "playing") return;
    if (id === sequence[currentStep]) {
      if (currentStep + 1 === sequence.length) {
        setStatus("won");
      } else {
        setCurrentStep((s) => s + 1);
      }
    } else {
      setStatus("lost");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          onClick={startGame}
          className="px-4 py-2 rounded bg-cyan-600 text-white"
        >
          Start Game
        </button>
        <div className="text-[hsl(var(--color-foreground))]">
          Time: {timeLeft}s
        </div>
        <div className="text-[hsl(var(--color-foreground))]">
          <div className="text-[hsl(var(--color-foreground))]">
            {status !== "idle" && `Status: ${status}`}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {Array.from({ length: totalNodes }).map((_, i) => {
          const id = i + 1;
          const isSelected =
            status === "preview" && sequence.includes(id)
              ? true
              : status === "playing" && id === sequence[currentStep]
              ? true
              : false;

          return (
            <Node
              key={id}
              id={id}
              selected={isSelected}
              onClick={handleNodeClick}
            />
          );
        })}
      </div>
    </div>
  );
}
