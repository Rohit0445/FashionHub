import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
              FashionHub
            </div>

           
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="hover:text-pink-500">
                Home
              </a>
              <div className="relative group">
                <button className="hover:text-pink-500">Shop</button>
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded hidden group-hover:block">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Men
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Women
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Kids
                  </a>
                </div>
              </div>
              <a href="#" className="hover:text-pink-500">
                About
              </a>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </div>

            <div className=" md:flex space-x-4 items-center">
              {/* <a href="#">LOGIN</a> */}
              <Link to={'./login'}>LOGIN</Link>
              {/* <a href="#">SIGNUP</a> */}
              <Link to={'/signup'}>SIGNUP</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <div className="relative group left-4">
            <button className="hover:text-pink-500">Shop</button>
            <div className=" mt-2 w-40 bg-white shadow-md rounded hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Men
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Women
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Kids
              </a>
            </div>
          </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            About
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-white border-t mt-45 ">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">FashionHub</h2>
            <p className="text-gray-600 mb-4">
              Welcome to FashionHub, your one-stop destination for stylish and
              comfortable clothing. We bring you the latest trends, timeless
              classics, and everyday essentials, all at prices you’ll love.
              Whether you’re shopping for casual wear, work outfits, or special
              occasions, we have something for everyone. Enjoy a seamless
              shopping experience, fast delivery, and quality you can trust —
              because looking good should always be easy.
            </p>
            {/* <div className="flex space-x-4 text-gray-600">
            <Facebook className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
          </div> */}
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Single Item
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP & INFO</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Returns + Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Shipping + Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Find Us Easy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p className="text-gray-600">
              Do you have any questions or suggestions?
            </p>
            <p className="text-gray-800 font-medium mb-4">
              contact@yourcompany.com
            </p>
            <p className="text-gray-600">
              Do you need support? Give us a call.
            </p>
            <p className="text-gray-800 font-medium">+43 720 11 52 78</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
