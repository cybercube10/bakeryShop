import React from 'react'
import { TbBrandCakephp } from "react-icons/tb"; 
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"; 
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className='bg-black rounded-lg flex justify-between item-center px-8 py-10'>
      <div className='text-white ' ><TbBrandCakephp />
      <h3>"Bite into chaos,,</h3> 
      <input type="text" className='bg-inherit border px-2 my-2' placeholder='Email' />
      <button className='bg-gray-500 px-2 py-1 rounded-md mx-2'>Subscribe</button></div>
       

       <div className='text-white'>
       <h2  className='font-bold text-white '>Infomation</h2>
       <ul>
        <li>About us</li>
        <li>Blog</li>
        <li>Return & Exchange policy</li>
        <li>Offers</li>
       </ul>
       </div> 


       <div className='text-white'>
       <h2  className='font-bold text-white '>Helpful Links</h2>
       <ul>
        <li>Services</li>
        <li>Support</li>
        <li>Terms & Conditions</li>
        
       </ul>
       </div>

      <div className='text-white'>
        <h2  className='font-bold '>Contact us</h2>
        <h3>+91 1234567890</h3>
        <div >
         <ul className='flex justify-between items-center'>
         <li><FaInstagram /></li>
          <li><FaYoutube /></li>
          <li><BsTwitterX />
          </li>
         </ul>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
