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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:p-0 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900 cursor-pointer" onClick={() => scrollToSection("hero")}>
              Catharina Musilah
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("product")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("benefit")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Benefit
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Blog
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("product")}
            className="hidden md:inline-flex"
          >
            Beli Sekarang
          </Button>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => scrollToSection("product")}
            className="md:hidden"
            size="sm"
          >
            Beli Sekarang
          </Button>
        </div>
      </Container>
    </nav>
  );
}
