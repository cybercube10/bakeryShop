import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';


function AdminPage() {
  // State to manage the active menu item
  const [activeMenu, setActiveMenu] = useState('ProductList');

  return (
    <div className='p-2' >
    <h1 className='text-center font-extrabold'>Admin Dashboard</h1>
     <div className="admin-container flex"> {/* Sidebar */}
      <aside className="sidebar flex w-1/4 flex-col pt-10 ">
       <button 
          className={activeMenu === 'ProductList' ? 'bg-blue-400 p-4 text-white' : 'bg-white text-black p-4'}
          onClick={() => setActiveMenu('ProductList')}
        >  
          Inventory
        </button>
        <button
          className={activeMenu === 'ProductForm' ? 'bg-blue-400 p-4 text-white' : 'bg-white text-black p-4'}
          onClick={() => setActiveMenu('ProductForm')}
        > 
          Add Products
        </button>
      </aside>

      
      <main className="main-content pt-10 pl-5 flex">
        {activeMenu === 'ProductList' && <ProductList />}
        {activeMenu === 'ProductForm' && <ProductForm />}
      </main>
    </div> </div>
  );
}

export default AdminPage;
