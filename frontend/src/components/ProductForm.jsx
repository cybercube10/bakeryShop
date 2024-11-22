import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [productData, setProductData] = useState({
    name: '',
    price: null,
    description: '',
    category: '',
  });

  const [productImage, setProductImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleAddProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('image', productImage); // Append the image file

    try {
      await axios.post('http://localhost:5000/api/products', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added successfully!');
      setProductData({
        name: '',
        price: '',
        description: '',
        category: '',
      });
      setProductImage(null);      
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.'); 
    }
  }; 

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  

  return (
    <div className='flex items-center justify-center '>
      
      <form className=' w-full  flex flex-col items-center justify-between border p-1 ' onSubmit={handleAddProducts}>
        <input
          type="text"
          name="name"
          className='border m-2'
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          min="0"
          className='border m-2 text-center'
          placeholder="$"
          value={productData.price}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="description"
          className='border m-2'
          placeholder="Description"
          value={productData.description}
          onChange={handleChange} 
          required
        />
        <select  name="category" className='m-2' value={productData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Cakes">Cakes</option>
          <option value="Pastry">Pastry</option>
          <option value="Cookies">Cookies</option>
          <option value="Candies">Candies</option>
          <option value="Bouquet">Bouquet</option>
        </select>

        <input
          type="file"
          name="image"
          onChange={handleFileChange} 
          className='border m-4'
          required
        />

<div> <button className='py-1  px-2 bg-blue-500 text-white rounded-md items-center ' type="submit">Add Product</button>
</div>      
</form>
    </div>
  );
}

export default ProductForm;
