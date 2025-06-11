export default function Hero() {
  return (
    <header className="min-h-[70vh] flex flex-col items-center justify-center text-center glass p-10 relative">
      <nav className="absolute top-8 right-10 hidden md:flex space-x-8 text-sm text-gray-300">
        {[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-emerald-400 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>
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
