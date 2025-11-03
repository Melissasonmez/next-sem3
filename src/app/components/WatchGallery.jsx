"use client";

export default function WatchGallery({ options, activeId, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <button key={opt.id}>
          onClick = {() => onselect(opt.id)}
          className=
          {`flex items-center gap-2 rounded-xl px-4 py-3 border transition
            ${activeId === opt.id ? "border-gray-700 bg-white/60" : "border-transparent bg-white/30"}
          `}
          style={{ bagroundColor: opt.bg }}
          <img src={opt.img} alt={opt.label} className="w-10 h-10 object-contain" />
          <span className="text-sm text-gray-700 font-medium">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
