"use client";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-12">
      {/* Left side */}
      <nav className="flex items-center gap-8">
        {/* Apple logo */}
        <button>
          <img src="/apple.svg" alt="Apple logo" className="w-6 h-6 object-contain" />
        </button>
{/* Menu */}
<ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
  {["Mac", "iPhone", "iPad", "iWatch", "Support"].map((item) => (
    <li key={item}>
      {item === "iWatch" ? (
        <span className="bg-white text-[#dfeaf4] font-medium rounded-full px-3 py-1">
          {item}
        </span>
      ) : (
        <button className="hover:text-gray-900 transition">{item}</button>
      )}
    </li>
  ))}
</ul>

      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <button>
          <img src="/search.svg" alt="Search" className="w-4 h-4" />
        </button>
          <div className="w-px h-5 bg-white opacity-70"></div>
        <button>
          <img src="/shoppingbag.svg" alt="Bag" className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
