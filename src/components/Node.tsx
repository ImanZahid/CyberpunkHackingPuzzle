interface NodeProps {
  id: number;
  selected: boolean;
  onClick: (id: number) => void;
}

export function Node({ id, selected, onClick }: NodeProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`w-24 h-24 flex items-center justify-center rounded-lg cursor-pointer border transition
        ${
          selected
            ? "bg-[hsl(var(--color-accent))]/40 border-[hsl(var(--color-accent))] shadow-[0_0_10px_hsl(var(--color-accent))]"
            : "bg-[hsl(var(--color-primary))]/10 hover:bg-[hsl(var(--color-primary))]/30 border-[hsl(var(--color-primary))]/50"
        }`}
    >
      Node {id}
    </div>
  );
}
