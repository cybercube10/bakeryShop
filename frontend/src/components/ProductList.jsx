import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [list, setList] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null); // State to manage which product is expanded

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setList(res.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products only once on mount

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setList(list.filter((product) => product._id !== id)); // Remove deleted product from state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const toggleProduct = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId); // Toggle the expanded product
  };

  return (
    <div className="p-4 h-full">
      <ul className="w-full max-h-[calc(100vh-200px)] overflow-y-auto">
        {list.map((product) => (
          <li key={product._id} className="my-2 border rounded-md">
            <div 
              className="flex items-center justify-between p-2 h-24 w-full gap-4 cursor-pointer"
              onClick={() => toggleProduct(product._id)} 
            >
              <div className="h-full aspect-square">
                <img 
                  src={`http://localhost:5000/${product.image}`} 
                  className="h-full w-full object-cover rounded-md"
                  alt={product.name} 
                />
              </div>
              <div className="flex-1 flex items-center justify-between pr-4 ">
                <div>
                  <strong>{product.name}</strong>
                  <span className="mx-2">-</span>
                  <span>${product.price}</span>
                 
                 
                </div>
               <div className='mx-2'>
               <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click from triggering the toggle
                    handleDeleteProduct(product._id);
                  }}
                  className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
               </div>
              </div>
              <div className="ml-2">
                {expandedProductId === product._id ? '−' : '+'} {/* Indicator for expand/collapse */}
              </div>
            </div>
            {expandedProductId === product._id && (
              <div className="p-4 border-t">
                <p>{product.description}</p>
                <span className='font-light'>[{product.category}]</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
