"use client";

import { useState } from "react";

const variants = [
  { id: "navy", label: "Navy", hex: "#1a1a1a", img: "/navy.png" },
  { id: "mint", label: "Mint", hex: "#8ff2da", img: "/mint.png" },
  { id: "ocean", label: "Ocean", hex: "#7dd3fc", img: "/ocean.png" },
];

export default function Hero() {
  const [active, setActive] = useState("navy");
  const current = variants.find((v) => v.id === active);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 bg-bgLight">
      {/* Left side */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-extrabold text-gray-800">The Perfect Moment</h1>
        <p className="text-2xl text-gray-600 mt-3">Between Past And Future.</p>

        <button className="mt-6 border border-gray-800 rounded-lg px-5 py-3 hover:bg-gray-800 hover:text-white transition">Bye Now</button>
      </div>

      {/* Right side */}
      <div className="mt-10 md:mt-0 flex flex-col items-center">
        <img src={current.img} alt={current.label} className="w-64 h-auto" />

        {/* color buttons */}
        <div className="flex gap-3 mt-6">
          {variants.map((v) => (
            <button key={v.id} onClick={() => setActive(v.id)} className={`w-5 h-5 rounded-full border-2 ${active === v.id ? "border-black" : "border-gray-300"}`} style={{ backgroundColor: v.hex }} />
          ))}
        </div>
      </div>
    </section>
  );
}
