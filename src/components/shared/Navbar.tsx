import { useState } from "react";
import logo from "../../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-3">
        {/* Mobile: Left Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Brand Logo (Left on Desktop, Center on Mobile) */}
        <div className="flex items-center">
          <a href="#">
            <img className="h-8 md:h-9 w-auto" src={logo} alt="Dev Stack" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-6 items-center font-medium text-sm">
            <li>
              <a href="#" className="text-[#d91b7e] font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="text-gray-600 hover:text-[#d91b7e] transition">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#d91b7e] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#d91b7e] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#d91b7e] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Sign In / Sign Up buttons */}
        <div className="flex gap-3 items-center">
          <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-3 py-1.5 rounded-lg transition cursor-pointer">
            Sign In
          </button>
          <button className="bg-brand-gradient text-white text-sm font-medium rounded-full px-4 py-1.5 hover:opacity-90 transition cursor-pointer shadow-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#d91b7e]"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600 hover:text-[#d91b7e]"
          >
            Technologies
          </a>
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600 hover:text-[#d91b7e]"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600 hover:text-[#d91b7e]"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600 hover:text-[#d91b7e]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;