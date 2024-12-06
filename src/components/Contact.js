import React from 'react';
import useGoogleSheetData from '../components/Usehooks';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const tabName = 'Contact';
  const range = 'A2:B10';
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContactInfo = {
    phone: 'Not available',
    email: 'Not available',
    facebook: '#',
    instagram: '#',
    twitter: '#',
  };

  const contactInfo =
    data && data.length > 0
      ? data.reduce((acc, [key, value]) => {
          acc[key.toLowerCase()] = value;
          return acc;
        }, {})
      : defaultContactInfo;

  if (error) {
    console.error('Error fetching contact info:', error);
  }

  return (
    <section id="contact" className="py-16 bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          We’d love to hear from you! Reach out to us for your needs.
        </p>
        <div className="space-y-4 text-gray-800">
          <p>
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            {contactInfo.email !== 'Not available' ? (
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-blue-700 hover:underline"
              >
                {contactInfo.email}
              </a>
            ) : (
              contactInfo.email
            )}
          </p>
          <div className="mt-4 space-x-4 flex justify-center">
            <strong className="block mb-2">Follow Us:</strong>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-500 text-2xl"
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
