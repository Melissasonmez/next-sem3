"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import { Main } from "next/document";
import ColorPicker from "./components/ColorPicker";
import WatchGallery from "./components/WatchGallery";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#B6CCDA]">
      <Navbar />
      <Hero />
    </main>
  );
}
