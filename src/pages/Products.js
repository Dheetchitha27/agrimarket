import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Fruits", "Vegetables", "Grains", "Spices", "Dairy"];

const allProducts = [
  { name: "Apple", price: "₹150/kg", category: "Fruits", image: "images/apples.jpg" },
  { name: "Orange", price: "₹80/kg", category: "Fruits", image: "images/oranges.jpeg" },
  { name: "Kiwi", price: "₹200/kg", category: "Fruits", image: "images/kiwi.jpeg" },
  { name: "Banana", price: "₹40/dozen", category: "Fruits", image: "images/banana.jpeg" },
  { name: "Tomato", price: "₹45/kg", category: "Vegetables", image: "images/tomatoes.jpg" },
  { name: "Carrot", price: "₹40/kg", category: "Vegetables", image: "images/carrots.jpg" },
  { name: "Spinach", price: "₹25/bunch", category: "Vegetables", image: "images/spinach.jpeg" },
  { name: "Potato", price: "₹30/kg", category: "Vegetables", image: "images/potato.jpeg" },
  { name: "Basmati Rice", price: "₹120/kg", category: "Grains", image: "images/rice.jpg" },
  { name: "Wheat", price: "₹45/kg", category: "Grains", image: "images/wheat.jpeg" },
  { name: "Soya Beans", price: "₹60/kg", category: "Grains", image: "images/soya.jpeg" },
  { name: "Peas", price: "₹55/kg", category: "Grains", image: "images/peas.jpeg" },
  { name: "Turmeric", price: "₹90/100g", category: "Spices", image: "images/turmeric.jpeg" },
  { name: "Cumin", price: "₹110/100g", category: "Spices", image: "images/cumin.jpeg" },
  { name: "Pepper", price: "₹130/100g", category: "Spices", image: "images/pepper.jpeg" },
  { name: "Clove", price: "₹150/100g", category: "Spices", image: "images/clove.jpeg" },
  { name: "Milk", price: "₹60/litre", category: "Dairy", image: "images/milk.jpeg" },
  { name: "Cheese", price: "₹80/100g", category: "Dairy", image: "images/cheese.jpeg" },
  { name: "Ghee", price: "₹500/litre", category: "Dairy", image: "images/ghee.jpeg" },
  { name: "Curd", price: "₹50/500g", category: "Dairy", image: "images/curd.jpeg" }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
    if (!cart.includes(item.name)) {
      setCart([...cart, item.name]);
      alert(`${item.name} added to cart!`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-2">
        Shop All Products
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore organic, fresh produce from trusted local farmers 🌾
      </p>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-8">
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-md border-green-300 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <span className="absolute top-2.5 left-3 text-green-500">🔎</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pt-2 md:pt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-green-50 text-green-700 border-green-300 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid or Empty Message */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-12">No products found 😕</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-2xl ring-1 ring-transparent hover:ring-green-300 transform hover:scale-105 transition duration-300 overflow-hidden relative"
            >
              {/* Optional Badge */}
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                Organic
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-green-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 hover:scale-105 transition transform"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Cart Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/cart"
          className="bg-green-700 text-white rounded-full w-14 h-14 shadow-lg text-xl relative flex items-center justify-center"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-green-700 rounded-full text-xs px-2 font-bold">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
