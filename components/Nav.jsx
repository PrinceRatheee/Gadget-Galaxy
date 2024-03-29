"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "./Sidebar/Sidebar"
const links = [
  { name: "Home", href: "/" },
  { name: "Earbuds", href: "/productCategory/Earbuds" },
  { name: "Speakers", href: "/productCategory/Speakers" },
  { name: "Watches", href: "/productCategory/Watches" },
  { name: "Headphones", href: "/productCategory/Headphones" },
];

const Nav = () => {
  
  
  const fetchProduct=(e)=>{
    e.preventDefault();
    router.push(`/searchProduct/${searchText}`)
  }
  
  
  const pathname = usePathname();
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  return (
    <header className="mb-8 border-b flex flex-col  bg-white z-50 fixed w-full top-0 ">
      <div className=" items-center  mx-auto gap-4 hidden xl:flex   ">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl w-[8rem] font-bold">Gadget Galaxy</h1>
        </Link>
        <nav className="hidden gap-8 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-red-500"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-orange-400"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <form
            action=""
            onSubmit={(e)=>fetchProduct(e)}
            >
            <input
              type="text"
              className="border-2 border-zinc-300  px-[1rem] py-[0.6rem]  "
              name="search"
              id="email"
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </form>
        </div>
        <div className="flex divide-x border-r sm:border-l">
          <button
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none hover:bg-gray-100 items-center justify-center"
            onClick={() => router.push("/shoppingCart")}
          >
            <div className="color-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[2rem]"
              >
                <path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"></path>
              </svg>
            </div>
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </button>
        </div>
        
      </div>
      <div className=" items-center   xl:hidden flex   ">
        <div className="flex items-center pt-[6rem]">
            
            <Sidebar/>
        </div>
        <Link href="/" >
          <h1 className="text-3xl md:text-4xl  text-center w-[7rem] absolute right-[33%] md:right-[37%] md:top-[2rem] md:w-[15rem] top-[1.5rem] font-bold">Gadget Galaxy</h1>
        </Link>
        

      
        <div className="flex divide-x border-r sm:border-l">
          <button
            className="flex absolute right-[2rem] top-[1.5rem] md:top-[0.3rem] flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none hover:bg-gray-100 items-center justify-center"
            onClick={() => router.push("/shoppingCart")}
          >
            <div className="color-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[2rem]"
              >
                <path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"></path>
              </svg>
            </div>
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Nav;
