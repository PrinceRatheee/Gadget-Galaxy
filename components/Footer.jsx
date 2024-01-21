"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Earbuds", href: "/productCategory/Earbuds" },
    { name: "Speakers", href: "/productCategory/Speakers" },
    { name: "Watches", href: "/productCategory/Watches" },
    { name: "Headphones", href: "/productCategory/Headphones" },
  ];
  
  return (
    <div className=' bg-[#dbdbdb] rounded-t-[40%] py-[4rem] mt-[3rem] flex  items-center justify-center md:pl-[0] px-[10vh]'>
      <div className='flex md:gap-[10rem] gap-[5rem]'>
        <div className='flex items-center  justify-center'>
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">Gadget Galaxy</h1>
        </Link>
        </div>
        <div className='flex flex-col'>
          <div ><h2 className='font-bold text-[1.3rem]'>Shop by categories</h2></div>
          <div className='flex flex-col'>
          
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
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer