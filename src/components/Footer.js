export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-2">AgriMarket</h3>
          <p className="text-sm text-gray-300">
            Bringing you fresh, organic produce directly from local farmers.
            Supporting sustainable agriculture and rural communities.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About", href: "/about" },
              { label: "Products", href: "/products" },
              { label: "Contact", href: "/contact" },
              { label: "Login", href: "/login" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-green-200 transition"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
          <p className="text-sm text-gray-300 mb-3">
            Join our newsletter to get the latest updates and offers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-2 rounded text-black focus:outline-none w-full"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} AgriMarket. All rights reserved.
      </div>
    </footer>
  );
}
