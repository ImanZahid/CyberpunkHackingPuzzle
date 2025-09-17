import { useState } from "react";
import { Node } from "./Node";

export function GameBoard() {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);

  const handleNodeClick = (id: number) => {
    setSelectedNodes((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {Array.from({ length: 16 }).map((_, i) => {
        const id = i + 1;
        return (
          <Node
            key={id}
            id={id}
            selected={selectedNodes.includes(id)}
            onClick={handleNodeClick}
          />
        );
      })}
    </div>
  );
}
