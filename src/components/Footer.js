import React from "react";
// 1. Import necessary FontAwesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Used faFacebookF for a cleaner icon

const Footer = () => {
  return (
    // 2. INCREASED SPACING: Changed py-12 to py-16 for more vertical room
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        {/* 3. INCREASED SPACING: Added gap-x-12 for better horizontal column separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 border-b border-gray-700 pb-8 mb-12">
          {/* Column 1: Branding & Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Agyeiwaa Irrigation
            </h3>
            <p className="text-sm text-gray-400">
              Reliable, sustainable farming solutions through cutting-edge
              irrigation technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-500 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-500 pb-1">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-500 pb-1">
              Get in Touch
            </h4>

            <p className="text-gray-300 mb-4">
              <a
                href="renaizfarms@gmail.com"
                className="hover:text-green-400"
              >
                Email: renaizfarms@gmail.com
              </a>
            </p>
            {/* phone number display */}
            <p className="text-gray-300 mb-4">Phone: (+233) 55336 2997</p>

            {/* used FontAwesome icons */}
            <div className="flex space-x-6 text-2xl">
              <a
                href="#social" // Replace with your actual Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#social" // Replace with your actual Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#social" // Replace with your actual Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* 7. INCREASED SPACING: Added mt-12 and pt-6 for better separation from columns */}
        <div className="text-center mt-12 pt-6 text-sm text-gray-500 border-t border-gray-700">
          <p>&copy; 2024 Agyeiwaa Irrigation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
