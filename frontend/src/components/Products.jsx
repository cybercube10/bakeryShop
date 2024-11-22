import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBasketShopping } from "react-icons/fa6";

function Products() {
  const [list, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchProducts = async (category = '') => {
    try {
      const res = await axios.get('http://localhost:5000/api/products', { params: { category } });
      setList(res.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);
 


  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>

      <div className="w-full flex items-center justify-center my-2 p-4 gap-2">
        {/* Add "All" as the first category */}
        {['All', 'Cakes', 'Cookies', 'Pastry', 'Candies', 'Bouquet'].map((category) => (
          <div
            key={category}
            className={`bg-black text-white rounded-full px-2 py-1 cursor-pointer w-24 text-center hover:bg-gray-800 ${
              selectedCategory === category || (selectedCategory === '' && category === 'All') ? 'bg-gray-800' : ''
            }`}
            onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {list.length === 0 ? (
          <div className="col-span-4 text-center text-gray-600 mt-4">
            No products available at the moment.
          </div>
        ) : list.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-[0_4px_8px_rgba(192,192,192,0.6)] overflow-hidden hover:shadow-[0_6px_12px_rgba(192,192,192,0.8)] transition-shadow duration-300">
            <div className="w-full aspect-square overflow-hidden">
              <img 
                src={`http://localhost:5000/${item.image}`} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg text-gray-800">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  )}
                  <p className="text-lg font-semibold text-gray-900 mt-2">
                    ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                  </p>
                </div>
                <button 
  className="border-2 border-[#D8DBDE] bg-black text-xl rounded-full p-2 hover:bg-white transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
  aria-label="Add to cart"
>
  <FaBasketShopping className="text-[#D8DBDE]" />
</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
