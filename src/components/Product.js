import React from 'react';
import useGoogleSheetData from '../components/Usehooks';

const Product = () => {
  const tabName = 'Products';
  const range = 'A2:C10'; 
  const [data, error] = useGoogleSheetData(tabName, range);

  if (error) {
    console.error('Error fetching product data:', error);
    return <div className="text-center text-red-600">Failed to load products.</div>;
  }

  if (!data.length) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <section
      id="product"
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.imgur.com/Ibi5MOS.jpg')` }} 
    >
      <div className="container mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Products</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-60 p-6 rounded-lg text-center text-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={product[2]} 
                  alt={product[0]} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              
              <h3 className="text-xl font-bold">{product[0]}</h3>
              <p className="text-gray-300 mt-2">{product[1]}</p>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <a
            href="#shop"
            className="bg-white text-black px-6 py-3 text-lg rounded-lg font-bold hover:bg-blue-700 hover:text-white transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
