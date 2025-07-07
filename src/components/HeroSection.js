export default function HeroSection() {
  return (
    <div
      className="h-[85vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4 relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
      }}
    >
      <div className="bg-black bg-opacity-20 absolute inset-0 z-0"></div>
      <div className="z-10">
        <h1 className="text-5xl font-bold drop-shadow-md mb-4">
          Welcome to AgriMarket
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          India's trusted agri-commerce platform connecting farmers, vendors, and customers with fresh, organic produce.
        </p>
        <a
          href="/products"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 text-white font-medium rounded shadow transition"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}
