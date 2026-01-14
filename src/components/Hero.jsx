import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="min-h-[70vh] flex flex-col items-center justify-center text-center glass p-10 relative fade-in">
      {/* Desktop Navigation */}
      <nav className="absolute top-8 right-10 hidden md:flex space-x-8 text-sm text-gray-300">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-emerald-400 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="absolute top-8 right-8 md:hidden text-gray-300 hover:text-emerald-400 transition z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 right-8 glass p-6 md:hidden flex flex-col space-y-4 z-40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <h1 className="text-6xl md:text-7xl font-extrabold text-emerald-400 mb-4">
        じゅりん
      </h1>
      <p className="text-xl md:text-2xl mb-2">I'm Jurin</p>
      <p className="text-lg text-gray-300 mb-6">Software Engineer</p>
      <a
        href="#contact"
        className="glass px-8 py-3 text-lg font-semibold text-emerald-200 hover:bg-white/10 transition"
      >
        Contact Me
      </a>
    </header>
  );
}
