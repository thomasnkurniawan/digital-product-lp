import Container from "../atoms/Container";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ibu Sarah",
      location: "Jakarta",
      rating: 5,
      comment: "Anak saya jadi lebih semangat latihan. Biasanya susah disuruh belajar, sekarang malah minta print lagi."
    },
    {
      name: "Ibu Rini",
      location: "Surabaya",
      rating: 5,
      comment: "Materinya sangat relevan dengan kurikulum sekolah. Anak jadi lebih mudah mengikuti pelajaran di kelas."
    },
    {
      name: "Ibu Maya",
      location: "Bandung",
      rating: 5,
      comment: "Praktis banget untuk homeschooling. Tidak perlu lagi cari-cari materi, semua sudah lengkap di sini."
    },
    {
      name: "Ibu Dewi",
      location: "Yogyakarta",
      rating: 5,
      comment: "Harganya sangat terjangkau dibanding manfaat yang didapat. Anak saya jadi lebih percaya diri."
    },
    {
      name: "Ibu Siti",
      location: "Medan",
      rating: 5,
      comment: "Desainnya menarik dan anak jadi tidak bosan. Sangat membantu proses belajar di rumah."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-500" : "text-slate-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimoni" className="section section-testimonials">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Apa Kata Orang Tua?
          </h2>
          <p className="section-desc">
            Ribuan orang tua sudah merasakan manfaatnya untuk anak-anak mereka.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-lg">"</span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                {testimonial.comment}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Info */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  1,200+
                </div>
                <div className="text-slate-600">
                  Orang Tua Puas
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  4.9/5
                </div>
                <div className="text-slate-600">
                  Rating Rata-rata
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  98%
                </div>
                <div className="text-slate-600">
                  Akan Merekomendasikan
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
