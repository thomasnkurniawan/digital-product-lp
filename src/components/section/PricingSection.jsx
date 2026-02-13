import Container from "../atoms/Container";
import Button from "../atoms/Button";

export default function PricingSection() {
  const handlePurchase = () => {
    // Dummy checkout - in real app this would redirect to payment/WhatsApp
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan Paket Belajar Anak SD. Mohon info lengkap cara pembeliannya."
    );
    window.open(`https://wa.me/628123456789?text=${message}`, "_blank");
  };

  return (
    <section id="harga" className="section section-pricing">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Dapatkan Sekarang
          </h2>
          <p className="section-desc">
            Investasi terbaik untuk masa depan pendidikan anak Anda.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="card card-hover text-center relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Paling Laris
            </div>

            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Paket Lengkap
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  Rp 49.000
                </span>
                <span className="text-slate-500">
                  /sekali bayar
                </span>
              </div>
              <p className="text-slate-600">
                Akses seumur hidup untuk semua materi
              </p>
            </div>

            {/* Features */}
            <div className="text-left mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">File PDF siap print</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Bisa dipakai berkali-kali</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Bonus lembar evaluasi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Panduan penggunaan lengkap</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handlePurchase}
              className="w-full text-lg py-4"
            >
              Beli Sekarang
            </Button>

            {/* Small Text */}
            <p className="text-sm text-slate-500 mt-4">
              Setelah klik beli, Anda akan diarahkan ke WhatsApp untuk proses selanjutnya.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Pembayaran aman</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
