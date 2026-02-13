import { useState } from "react";
import Container from "../atoms/Container";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Ini untuk kelas berapa?",
      answer: "Paket ini dirancang khusus untuk anak SD kelas 1-3. Materinya disesuaikan dengan kurikulum dan kemampuan kognitif anak usia 6-9 tahun."
    },
    {
      question: "Bisa dipakai berkali-kali?",
      answer: "Ya, sekali beli Anda bisa mengunduh dan mencetak file PDF ini berkali-kali tanpa batas waktu. Sangat ekonomis untuk digunakan adik-adik atau teman."
    },
    {
      question: "Cara download setelah beli?",
      answer: "Setelah pembayaran dikonfirmasi, Anda akan menerima email dengan link download. File PDF bisa langsung diunduh dan dicetak kapan saja."
    },
    {
      question: "Bisa di print hitam putih?",
      answer: "Tentu bisa! Semua materi dirancang agar tetap jelas dan menarik meski dicetak dengan printer hitam putih. Warna hanya sebagai tambahan."
    },
    {
      question: "Apakah ada panduan untuk orang tua?",
      answer: "Ya, kami sediakan panduan lengkap berupa tips cara mengajari anak, jadwal belajar yang disarankan, dan cara mengevaluasi perkembangan anak."
    },
    {
      question: "Bagaimana jika ada kesulitan?",
      answer: "Kami menyediakan support 24/7 melalui WhatsApp. Anda bisa bertanya seputar penggunaan materi atau kesulitan dalam mengajari anak."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-faq">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="section-desc">
            Kami jawab pertanyaan-pertanyaan umum tentang paket belajar ini.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Masih ada pertanyaan?
            </h3>
            <p className="text-slate-600 mb-6">
              Jangan ragu untuk menghubungi kami. Tim support siap membantu Anda 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi WhatsApp
              </a>
              <a
                href="mailto:info@paketbelajar.com"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
