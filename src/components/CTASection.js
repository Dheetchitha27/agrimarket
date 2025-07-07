export default function CTASection() {
  return (
    <section className="bg-green-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">
          🌱 Join the Movement
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Whether you're a farmer looking to sell directly or a conscious
          consumer seeking clean food — <span className="font-semibold">AgriMarket</span> connects you with purpose.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/login"
            aria-label="Become a Seller"
            className="bg-white border-2 border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all font-medium shadow-sm"
          >
            🌾 Become a Seller
          </a>
          <a
            href="/contact"
            aria-label="Contact Us"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all font-medium shadow-sm"
          >
            📞 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
