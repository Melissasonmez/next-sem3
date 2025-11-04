"use client";

import { useState } from "react";

// Alle ur-varianter
const variants = [
  { id: "navy", label: "Navy", hex: "#1a1a1a", img: "/navy.png", cardBg: "#e5e7eb" },
  { id: "mint", label: "Mint", hex: "#8ff2da", img: "/mint.png", cardBg: "#d1fae5" },
  { id: "ocean", label: "Ocean", hex: "#7dd3fc", img: "/ocean.png", cardBg: "#dbeafe" },
];

export default function Hero() {
  const [active, setActive] = useState("navy");
  const current = variants.find((v) => v.id === active);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-16 px-6 md:px-12 py-16 bg-bgLight">
      {/* Venstre side – tekst */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-6xl font-extrabold text-white whitespace-nowrap">
          The Perfect Moment
        </h1>
        <p className="text-4xl text-white mt-3">Between Past And Future.</p>

        <button className="mt-6 border border-white text-white rounded-lg px-10 py-3 text-sm font-medium hover:bg-white hover:text-gray-900 transition">
          Buy Now
        </button>
      </div>

      {/* Højre side – ur, farvecirkler og små ure */}
      <div className="mt-10 md:mt-0 flex flex-col items-center">
        {/* Øverste del: stort ur + farvecirkler ved siden af */}
        <div className="flex items-center gap-8">
          {/* Det store ur */}
          <img src={current.img} alt={current.label} className="w-64 h-auto" />

          {/* Farvecirkler – lodret til højre */}
          <div className="flex flex-col gap-3">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`w-6 h-6 rounded-full border-2 transition ${
                  active === v.id ? "border-white scale-110" : "border-gray-300"
                }`}
                style={{ backgroundColor: v.hex }}
                aria-label={v.label}
              />
            ))}
          </div>
        </div>

        {/* De tre små ure – vandret under det store ur */}
        <div className="flex justify-center gap-4 mt-8">
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-3 border transition mt-10 ${
                active === v.id
                  ? "border-gray-700 bg-white/60"
                  : "border-transparent bg-white/30"
              }`}
              style={{ backgroundColor: v.cardBg }}
            >
              <img
                src={v.img}
                alt={v.label}
                className="w-10 h-10 object-contain drop-shadow-md"
              />
              <span className="text-sm text-gray-700 font-medium">
                {v.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
