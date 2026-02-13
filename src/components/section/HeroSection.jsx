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
      <Container className="py-16 max-w-4xl">
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Left Column */}
          <h1 className="section-title text-center mb-6">
            Bantu Anak Cepat Pintar Membaca, Menulis, dan Berhitung — Tanpa
            Drama.
          </h1>
          <p className="section-desc text-center mb-8">
            Paket lembar kerja siap cetak untuk anak SD. Dirancang oleh guru
            berpengalaman, mudah dipahami anak, dan praktis untuk orang tua.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8 justify-center">
            <Button onClick={() => scrollToSection("harga")}>
              Beli Sekarang
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("preview")}
            >
              Lihat Preview
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-medium text-slate-700">
                4.9 rating
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-500">📄</span>
              <span className="text-sm font-medium text-slate-700">
                120+ halaman
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-500">👩‍🏫</span>
              <span className="text-sm font-medium text-slate-700">
                Dibuat oleh guru SD
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
