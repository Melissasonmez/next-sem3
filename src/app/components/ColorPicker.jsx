"use client";

export default function Colorpicker({ colors, activeId, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      {colors.map((c) => (
        <button
          key={c.id}
          aria-label={c.label}
          onClick={() => onChange(c.id)}
          className="w-4 h-4 rounded-full border-2 transition"
          style={{
            backgroundColor: c.hex,
            borderColor: activeId === c.id ? "#000" : "#d4d4d8",
          }}
        />
      ))}
    </div>
  );
}
