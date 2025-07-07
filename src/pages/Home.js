import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Farmer Health Awareness */}
      <section className="py-16 bg-green-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/farmer-health.jpg"
            alt="Farmer Wellbeing"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Prioritizing Farmer Health
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Every product you buy supports not just your health — but also the livelihood, nutrition, and dignity of Indian farmers. Our programs include regular health checkups, soil testing, and crop insurance education.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <Section
        title="Fruits"
        cards={[
          { image: "images/apples.jpg", label: "Apples" },
          { image: "images/oranges.jpeg", label: "Oranges" },
          { image: "images/kiwi.jpeg", label: "Kiwi" },
          { image: "images/banana.jpeg", label: "Bananas" }
        ]}
      />
      <Section
        title="Vegetables"
        cards={[
          { image: "images/tomatoes.jpg", label: "Tomatoes" },
          { image: "images/carrots.jpg", label: "Carrots" },
          { image: "images/spinach.jpeg", label: "Spinach" },
          { image: "images/potato.jpeg", label: "Potatoes" }
        ]}
      />
      <Section
        title="Grains & Pulses"
        cards={[
          { image: "images/rice.jpg", label: "Rice" },
          { image: "images/wheat.jpeg", label: "Wheat" },
          { image: "images/soya.jpeg", label: "Soya Beans" },
          { image: "images/peas.jpeg", label: "Peas" }
        ]}
      />
      <Section
        title="Spices & Herbs"
        cards={[
          { image: "images/turmeric.jpeg", label: "Turmeric" },
          { image: "images/cumin.jpeg", label: "Cumin" },
          { image: "images/pepper.jpeg", label: "Pepper" },
          { image: "images/clove.jpeg", label: "Clove" }
        ]}
      />
      <Section
        title="Dairy Products"
        cards={[
          { image: "images/milk.jpeg", label: "Milk" },
          { image: "images/ghee.jpeg", label: "Ghee" },
          { image: "images/curd.jpeg", label: "Curd" },
          { image: "images/cheese.jpeg", label: "Cheese" }
        ]}
      />
      <Section
        title="Healthy & Organic"
        cards={[
          { image: "images/oil.jpeg", label: "Cold-Pressed Oils" },
          { image: "images/organic.jpg", label: "Organic Kits" },
          { image: "images/tools.jpeg", label: "Farming Tools" },
          { image: "images/dairy.jpg", label: "Desi Ghee Packs" }
        ]}
      />

      {/* Testimonials Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-sm transition hover:scale-105 hover:shadow-lg">
            <p className="text-gray-600 italic mb-2">
              “I love buying directly from farmers. The quality is amazing!”
            </p>
            <h4 className="font-semibold text-green-800">– Sneha, Chennai</h4>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-sm transition hover:scale-105 hover:shadow-lg">
            <p className="text-gray-600 italic mb-2">
              “A wonderful platform that helps support local growers.”
            </p>
            <h4 className="font-semibold text-green-800">– Ravi, Coimbatore</h4>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
