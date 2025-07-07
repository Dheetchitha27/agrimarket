import { useState } from "react";

const initialCart = [
  { name: "Apple", price: 150, quantity: 2, image: "images/apples.jpg" },
  { name: "Ghee", price: 500, quantity: 1, image: "images/ghee.jpeg" },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleQuantityChange = (index, delta) => {
    const updated = [...cart];
    const newQty = updated[index].quantity + delta;
    if (newQty > 0) updated[index].quantity = newQty;
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">Your cart is empty 😔</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded shadow"
                />
                <div>
                  <h2 className="text-xl font-semibold text-green-800">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-green-700 font-bold hover:bg-green-200 transition"
                  onClick={() => handleQuantityChange(i, -1)}
                >
                  -
                </button>
                <span className="px-2 text-lg">{item.quantity}</span>
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-green-700 font-bold hover:bg-green-200 transition"
                  onClick={() => handleQuantityChange(i, 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 text-sm text-red-600 hover:underline"
                  onClick={() => handleRemove(i)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Summary */}
          <div className="text-right pt-8 border-t mt-8">
            <h3 className="text-2xl font-bold text-green-700">Total: ₹{total}</h3>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition font-semibold">
              ✅ Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
