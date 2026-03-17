import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? "bg-[#0a0806]/80 backdrop-blur-lg border-b border-[#E5D3C5]/10" : "bg-transparent"}`}
      style={{ transform: "translatesd(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-[#E5D3C5]" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? "text-[#E5D3C5]" : "text-white/70 hover:text-[#E5D3C5]"}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-3.5 bg-gradient-to-r from-[#E5D3C5] to-[#D4A574] text-[#0a0806] font-semibold text-base rounded-[17px] border-2 border-[#E5D3C5] hover:shadow-lg hover:shadow-[#E5D3C5]/30 transition-all duration-300 hover:scale-105"
            >
              Hire me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-[#E5D3C5] hover:text-[#D4A574] transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? `max-h-96 opacity-100` : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#0a0806]/95 backdrop-blur-lg border-t border-[#E5D3C5]/10 px-5 py-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? "text-[#E5D3C5] bg-[#E5D3C5]/10" : "text-white/70 hover:text-[#E5D3C5] hover:bg-[#E5D3C5]/5"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 bg-gradient-to-r from-[#E5D3C5] to-[#D4A574] text-[#0a0806] font-semibold text-base rounded-[17px] border-2 border-[#E5D3C5] hover:shadow-lg hover:shadow-[#E5D3C5]/30 transition-all duration-300 mt-2"
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
