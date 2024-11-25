import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const sheetID = '1L_rgEJT1blgX3TZBjcNjXUO_5Kv161UuXwoS3vi-FOg'; 
      const apiKey = 'AIzaSyDLBB52fTl6-F-Zpf4-WZiP3HYaVpPTBcM'; 
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Products!A2:B10?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.values && data.values.length > 0) {
          setProducts(data.values); 
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!products.length) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <section id="product" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-green-700">{product[0]}</h3>
              <p className="text-gray-600 mt-2">{product[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
