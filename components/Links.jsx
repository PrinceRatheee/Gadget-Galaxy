"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

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
  const [user, setUser] = useState();
  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Succesfull");
      router.push("/signin");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const fetchUser = async () => {
    const response = await axios.get("/api/users/userData");
    if (response?.data?.data == 0) {
      setUser(0);
    } else if (response?.data?.status == 200) {
      setUser(response?.data?.data);
    } else {
      try {
        const res = await axios.get("/api/users/logout");
        router.push("/signin");
        // toast.success('Logout Succesfull');
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    fetchUser();
  });

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
      {user == 0 ? (
        <div className="h-[3rem]   absolute top-[74%] bg-red-500 px-[1.6rem] py-[0.6rem] font-semibold hover:bg-red-600   text-white rounded-xl flex cursor-pointer left-[38%]  z-[50]" onClick={()=>router.push("/signin")}>
          Login
        </div>
      ) : (
        <div className="h-[3rem]   absolute  top-[74%] px-[1.6rem] py-[0.6rem] font-semibold   text-white rounded-xl flex  cursor-pointer left-[20%]">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer  "
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="w-[5.5rem] text-red-600 cursor-pointer z-50">{user?.username}</h2>
          <div className="bg-red-500 absolute  top-[90%] px-[1.6rem] py-[0.6rem] font-semibold hover:bg-red-600   text-white rounded-xl cursor-pointer flex z-50" onClick={()=>onLogout()}>
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
