import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#F5F5F5]">
      <div className="container px-5 pb-24 pt-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gradient1 tracking-widest text-md mb-3">
              PoliSwap
            </h2>
            <p className="list-none mb-10 w-[154px]">
              Through many of its unique properties, USDC allows exciting uses
              that could not be covered by any previous payment system.
            </p>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#2C4569] tracking-widest text-md mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10 flex flex-col space-y-4">
              <li>
                <Link href="/Aboutus" className="text-global">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Contactus" className="text-global">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-global">
                  How to use
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#2C4569] tracking-widest text-md mb-3">
             Resources
            </h2>
            <nav className="list-none mb-10 flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-global">
                  Prices
                </Link>
              </li>
              <li>
                <Link href="/" className="text-global">
                  Tax
                </Link>
              </li>
              <li>
                <Link href="/" className="text-global">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-global">
                  Support
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 gap-y-6">
            <h2 className="title-font font-bold ext-[#2C4569]  text-md mb-3">
              Get In Touch
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className=" text-sm text-gray-600"
                >
                 Question or feedback? We’d love to hear from you.
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-4"
                />
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
