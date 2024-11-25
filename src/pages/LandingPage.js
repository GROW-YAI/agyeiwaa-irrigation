import React from 'react';
import useGoogleSheetData from '../components/Usehooks'; 
import { Link } from 'react-scroll';

const LandingPage = () => {
  const tabName = 'landingpage';
  const range = 'A2:C10'; 
  const [data, error] = useGoogleSheetData(tabName, range);

  // Default content
  const defaultContent = { title: '', description: '', image: '' };
  const content =
    data && data.length > 0
      ? {
          title: data[0][0],
          description: data[0][1],
          image: data[0][2],
        }
      : defaultContent;

  if (error) {
    console.error('Error fetching content:', error);
  }

  return (
    <section
      id="landing"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${content.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg md:text-xl mb-6">{content.description}</p>
          <Link
            to="product" 
            smooth={true}
            duration={500}
            className="bg-green-700 px-6 py-3 text-lg rounded-lg font-bold hover:bg-green-800 transition cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
