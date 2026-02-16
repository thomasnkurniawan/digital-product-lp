import Button from "../atoms/Button";
import Container from "../atoms/Container";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="section section-hero pt-32">
      <motion.div
        className="absolute top-20 left-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/assets/icon/book.svg" alt="Heart" className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/assets/icon/college.svg" alt="Heart" className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-blue-100"
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src="/assets/icon/pen.svg" alt="Heart" className="w-10 h-10" />
      </motion.div>
      <div className="py-16 max-w-2xl mx-auto w-full">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="section-title text-center mb-6">
            Materi Belajar Anak & Ebook Digital Siap Download, Siap Cetak 📚✨
          </h1>
          <p className="section-desc text-center">
            Temukan berbagai worksheet, modul pembelajaran, dan ebook digital
            untuk anak, orang tua, maupun guru. <br />Praktis, Rapi, Langsung
            bisa digunakan.
          </p>

          <div className="flex gap-3 mb-8 justify-center">
            <Button onClick={() => scrollToSection("product")}>
              Beli Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
