export default function About() {
  return (
    <div className="bg-white text-gray-800 px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-green-700 text-center mb-6">About AgriMarket</h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        We're on a mission to revolutionize agriculture by empowering farmers,
        promoting health, and fostering sustainable communities.
      </p>

      {/* Section 1: Farmer Health */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/farmer-health.jpg"
          alt="Farmer Wellbeing"
          className="rounded-lg shadow-xl object-cover w-full h-[300px]"
        />
        <div>
          <h2 className="text-3xl font-semibold text-green-700 mb-3">Prioritizing Farmer Health</h2>
          <p className="text-gray-700 leading-relaxed">
            Every purchase you make supports farmers' well-being. Our programs include
            regular health checkups, soil testing, mental health counseling, and
            crop insurance awareness.
          </p>
        </div>
      </div>

      {/* Section 2: Community Support */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
        <div className="md:order-2">
          <img
            src="/images/community.jpg"
            alt="Rural Community"
            className="rounded-lg shadow-xl object-cover w-full h-[300px]"
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl font-semibold text-green-700 mb-3">Building Rural Communities</h2>
          <p className="text-gray-700 leading-relaxed">
            AgriMarket actively reinvests in rural India. From cold storage chains and
            mobile agri-clinics to free Wi-Fi zones and farmer training hubs, we're
            working to close the rural-urban divide.
          </p>
        </div>
      </div>

      {/* Section 3: Our Vision */}
      <div className="bg-green-50 mt-20 p-8 rounded-lg text-center shadow">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          AgriMarket isn’t just an e-commerce platform — it’s a movement. We're here
          to make healthy food accessible and fair trade profitable. We bridge
          tradition and technology to transform how India eats and grows.
        </p>
      </div>
    </div>
  );
}
