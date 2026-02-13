import { useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Modal from "../atoms/Modal";

export default function PreviewSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy preview images - in real app these would be actual product screenshots
  const previewImages = [
    { id: 1, title: "Halaman 1 - Pengenalan Huruf", description: "Latihan mengenal huruf abjad" },
    { id: 2, title: "Halaman 2 - Menulis Sederhana", description: "Praktik menulis huruf dasar" },
    { id: 3, title: "Halaman 3 - Berhitung 1-10", description: "Perkenalan angka dan berhitung" },
    { id: 4, title: "Halaman 4 - Gambar dan Warna", description: "Aktivitas mewarnai edukatif" },
    { id: 5, title: "Halaman 5 - Teka-Teki", description: "Teka-teki melatih logika" },
    { id: 6, title: "Halaman 6 - Evaluasi", description: "Tes pemahaman materi" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="preview" className="section section-preview">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Lihat Isi Produknya
          </h2>
          <p className="section-desc">
            Ini contoh halaman yang akan Ibu dapatkan setelah membeli.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              className="card card-hover cursor-pointer group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3">📄</div>
                  <div className="text-sm font-medium text-slate-600">
                    Halaman {image.id}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {image.title}
              </h3>
              <p className="text-sm text-slate-600">
                {image.description}
              </p>
              <div className="mt-3 text-orange-600 text-sm font-medium group-hover:text-orange-700">
                Klik untuk lihat detail →
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Ingin lihat lebih banyak?
            </h3>
            <p className="text-slate-600 mb-6">
              Download preview gratis untuk melihat contoh lengkap materi yang akan Anda dapatkan.
            </p>
            <Button variant="outline" className="inline-flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Preview Gratis (PDF)
            </Button>
          </div>
        </div>
      </Container>

      {/* Modal for enlarged view */}
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="text-center">
            <div className="aspect-[3/4] bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl mb-6 flex items-center justify-center max-w-md mx-auto">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">📄</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              Ini adalah preview dari halaman {selectedImage.id}. 
              Versi lengkap dengan gambar dan konten edukatif akan Anda dapatkan setelah pembelian.
            </p>
            <Button onClick={closeModal}>
              Tutup
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
