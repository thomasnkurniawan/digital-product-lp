import Container from "../atoms/Container";
import CardProduct from "../molecules/CardProduct";

export default function PreviewSection() {
  // Dummy preview images - in real app these would be actual product screenshots
  const listProduct = [
    {
      id: 1,
      title: "Halaman 1 - Pengenalan Huruf",
      description: "Latihan mengenal huruf abjad",
      price: "Rp 50.000",
      isDiscount: true,
      priceAfterDiscount: "Rp 40.000"
    },
    {
      id: 2,
      title: "Halaman 2 - Menulis Sederhana",
      description: "Praktik menulis huruf dasar",
      price: "Rp 50.000",
    },
    {
      id: 3,
      title: "Halaman 3 - Berhitung 1-10",
      description: "Perkenalan angka dan berhitung",
      price: "Rp 50.000",
    },
    {
      id: 4,
      title: "Halaman 4 - Gambar dan Warna",
      description: "Aktivitas mewarnai edukatif",
      price: "Rp 50.000",
    },
    {
      id: 5,
      title: "Halaman 5 - Teka-Teki",
      description: "Teka-teki melatih logika",
      price: "Rp 50.000",
    },
    {
      id: 6,
      title: "Halaman 6 - Evaluasi",
      description: "Tes pemahaman materi",
      price: "Rp 50.000",
    },
  ];

  return (
    <section id="product" className="section section-preview">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Daftar Produk</h2>
          <p className="section-desc">
            Ini adalah produk yang langsung bisa dibeli.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listProduct.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
