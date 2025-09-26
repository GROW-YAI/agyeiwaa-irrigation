import React from "react";
import useGoogleSheetData from "../components/Usehooks";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const tabName = "Contact";
  const range = "A2:B10";
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContactInfo = {
    phone: "Not available",
    email: "Not available",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  };

  const contactInfo =
    data && data.length > 0
      ? data.reduce((acc, [key, value]) => {
          acc[key.toLowerCase()] = value;
          return acc;
        }, {})
      : defaultContactInfo;

  if (error) {
    console.error("Error fetching contact info:", error);
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you! Reach out to us for your needs.
        </p>

        {/* Social Links remain */}
        <div className="mt-8">
          <strong className="block mb-4 text-gray-800">Follow Us:</strong>
          <div className="flex justify-center space-x-6">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-3xl transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-3xl transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-3xl transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
