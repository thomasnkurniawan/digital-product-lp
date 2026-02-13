import Container from "../atoms/Container";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900">
              Paket Belajar Anak SD
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("benefit")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Benefit
            </button>
            <button
              onClick={() => scrollToSection("preview")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Preview
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Kontak
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("harga")}
            className="hidden md:inline-flex"
          >
            Beli Sekarang
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
}
