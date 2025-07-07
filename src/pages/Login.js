import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("");

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleBack = () => {
    setRole("");
  };

  return (
    <div className="min-h-screen pt-24 bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transition-all duration-300">
        {role === "" ? (
          <>
            <h2 className="text-3xl font-extrabold text-green-700 text-center mb-4">
              Register or Login
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Choose your role to continue
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleRoleSelect("seller")}
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
              >
                I’m a Seller
              </button>
              <button
                onClick={() => handleRoleSelect("buyer")}
                className="border border-green-600 text-green-700 py-2 rounded font-semibold hover:bg-green-100 transition"
              >
                I’m a Buyer
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
              {role === "seller" ? "Seller" : "Buyer"} Registration
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none"
                required
              />
              {role === "seller" && (
                <input
                  type="text"
                  placeholder="Farm/Business Name"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none"
                />
              )}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
              >
                Register as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            </form>
            <button
              onClick={handleBack}
              className="mt-6 text-sm text-green-700 underline hover:text-green-900 block text-center"
            >
              ← Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}
