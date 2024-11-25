import React from 'react';
import useGoogleSheetData from '../components/Usehooks'; 

const About = () => {
  const tabName = 'About';
  const range = 'A2:B2';
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContent = { image: '', description: '' };
  const content =
    data && data.length > 0
      ? {
          image: data[0][0],
          description: data[0][1],
        }
      : defaultContent;

  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={content.image}
            alt="About Agyeiwaa Irrigation"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Agyeiwaa Irrigation</h2>
          <p className="text-gray-700 leading-relaxed">{content.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
