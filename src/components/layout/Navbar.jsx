import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="home"
          className="text-2xl font-bold tracking-wide text-violet-400"
        >
          Dubagari<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-violet-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Abubakar_Dubagari_Abdullahi_Resume.pdf"
              download="Abubakar_Dubagari_Abdullahi_Resume.pdf"
              aria-label="Download Resume"
          className="hidden lg:inline-flex bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-lg font-medium"
        >
          Resume
        </a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-gray-300 hover:bg-violet-600 hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="px-6 mt-4">
              <a
                href="/resume.pdf"
                download
                className="block text-center bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-semibold"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;