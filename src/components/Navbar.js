import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-white font-semibold" : "text-white hover:text-green-200";

  return (
    <nav className="bg-green-800 shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <NavLink to="/" className="text-2xl font-bold text-white">
          AgriMarket
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink
            to="/login"
            className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 font-semibold"
          >
            Login
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-green-800">
          {["/", "/products", "/about", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="block text-center bg-white text-green-700 px-4 py-1 rounded font-semibold"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}
