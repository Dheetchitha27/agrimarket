// --- src/pages/SellerDashboard.js ---
import { useState } from "react";

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "", category: "", image: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({ name: "", price: "", category: "", image: "" });
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Seller Dashboard</h1>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-green-600">Add New Product</h2>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Add Product
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4">Your Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod, idx) => (
          <div key={idx} className="border rounded shadow p-4">
            {prod.image && <img src={prod.image} alt={prod.name} className="h-40 w-full object-cover rounded mb-2" />}
            <h3 className="text-lg font-bold text-green-700">{prod.name}</h3>
            <p className="text-gray-600">{prod.price}</p>
            <span className="text-sm text-green-500">{prod.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
