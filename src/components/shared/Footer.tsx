import logo from "../../assets/logo-text.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-4">
            <img className="h-8 w-auto" src={logo} alt="Dev Stack" />
            <p className="text-sm text-gray-500 max-w-sm">
              Explore frontend, backend, database, and tooling options to build
              and compare your ideal modern development stack.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-700 transition"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-700 transition"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-700 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Link Group 1: Product */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Stack Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Link Group 2: Company */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Link Group 3: Legal */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d91b7e] transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;