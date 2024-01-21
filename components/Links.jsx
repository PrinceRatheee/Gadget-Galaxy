"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { usePathname } from "next/navigation";


const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const router = useRouter();
  const pathname = usePathname();
 
  const links = [
    { name: "Home", href: "/" },
    { name: "Earbuds", href: "/productCategory/Earbuds" },
    { name: "Speakers", href: "/productCategory/Speakers" },
    { name: "Watches", href: "/productCategory/Watches" },
    { name: "Headphones", href: "/productCategory/Headphones" },
  ];
  const [searchText, setSearchText] = useState();
  const fetchProduct = (e) => {
    e.preventDefault();
    router.push(`/searchProduct/${searchText}`);
  };
  return (
    <>
      <div className="flex gap-4 items-center justify-end absolute top-[13%] left-[18%] z-50">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <form action="" onSubmit={(e) => fetchProduct(e)}>
          <input
            type="text"
            className="border-2 border-zinc-300 text-black  px-[1rem] py-[0.6rem]  w-[7rem] md:w-[12rem] "
            name="search"
            id="email"
            placeholder="Search here"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </form>
      </div>
      <motion.div className="links" variants={variants}>
        {" "}
        {links.map((link, idx) => (
          <div key={idx} className="lg:relative ">
            {pathname === link.href ? (
              <Link href={link.href}>
                <motion.p
                  className="text-lg font-semibold text-red-500"
                  variants={itemvariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.p>
              </Link>
            ) : (
              <Link href={link.href}>
                <motion.p className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-orange-400">
                  {link.name}
                </motion.p>
              </Link>
            )}
          </div>
        ))}
      </motion.div>
      
    </>
  );
};

export default Links;
