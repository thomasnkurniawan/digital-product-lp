import Container from "../atoms/Container";
import { motion } from "framer-motion";

export default function BenefitSection() {
  const benefits = [
    {
      icon: "📌",
      title: "Materi sesuai kurikulum SD",
      description:
        "Disesuaikan dengan kurikulum terbaru untuk mendukung proses belajar anak di sekolah.",
    },
    {
      icon: "✨",
      title: "Anak belajar sambil fun",
      description:
        "Desain menarik dan aktivitas interaktif membuat anak tidak merasa sedang belajar.",
    },
    {
      icon: "🧠",
      title: "Latihan fokus & logika",
      description:
        "Soal-soal dirancang untuk melatih konsentrasi, logika, dan kemampuan berpikir kritis.",
    },
    {
      icon: "🖨️",
      title: "Tinggal print, langsung pakai",
      description:
        "File PDF siap cetak, praktis dan bisa digunakan kapan saja tanpa perlu persiapan rumit.",
    },
    {
      icon: "🏡",
      title: "Cocok homeschooling",
      description:
        "Sempurna untuk pendampingan belajar di rumah atau sebagai tambahan materi sekolah.",
    },
    {
      icon: "🕒",
      title: "Hemat waktu orang tua",
      description:
        "Tidak perlu lagi cari-cari materi. Semua sudah tersusun rapi dan siap pakai.",
    },
  ];

  return (
    <section id="benefit" className="section section-benefits">
      <motion.div
        className="absolute top-20 left-20"
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src="/assets/icon/cert.svg" alt="Heart" className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32"
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src="/assets/icon/ruler.svg" alt="Heart" className="w-10 h-10" />
      </motion.div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Kenapa Banyak Orang Tua Suka Paket Ini?
          </h2>
          <p className="section-desc">
            Temukan berbagai keunggulan yang membuat paket ini menjadi pilihan
            tepat untuk mendukung pendidikan anak Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card card-hover text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
