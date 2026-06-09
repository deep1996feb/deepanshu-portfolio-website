import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md text-white shadow-cyan-500/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide leading-none">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Deepanshu Soni
            </span>
          </h1>

          <p className="hidden md:block mt-2 text-xs text-gray-500 tracking-[0.25em] uppercase">
            Python Backend Developer
          </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium inline-block hover:text-cyan-400 hover:scale-110 transition duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-cyan-400"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-medium hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;