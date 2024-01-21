"use client";
import Image from "next/image";
import "../styles/hero.css";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  initial: {
    y: -80,
  },
  animate: {
    y: -10,
    transition: {
      type: "spring",
      repeat: Infinity,
      repeatType: "mirror",
      damping: 300,
      stiffness: 360,
      duration: 6,
      // bounce:-100000,
    },
  },
};
const Hero = () => {
  return (
    <div className="bg-[#040404] h-[35rem] px-[2rem] xl:h-[40rem] lg:h-[20rem] w-full mb-[5rem] xl:block hidden">
      <div className="flex flex-col justify-center items-center pb-[10rem]  z-0 pt-[5rem] ">
        <div className="flex items-center">
          <h2 className="text-white z-10 text-8xl  top-[35%] left-[4%] anton-font ">
            Headphone{" "}
          </h2>

          <motion.div variants={variants} initial="initial" animate="animate">
            <img src="/headphones.webp" alt="Product Image" className="xl:w-[150rem] 2xl:w-[100rem] lg:w-[1300rem] md:w-[2500rem] w-[500rem] "></img>
          </motion.div>
          <h2 className="text-white z-10 text-8xl  top-[35%] right-[7%] anton-font ">
            {" "}
            Collections
          </h2>
        </div>
        <div className="w-[100vw]flex justify-center   bg-black">

        <Link href="/headphones">
          <button className="z-50  bottom-[15%] bg-white border-white border-solid text-black py-[0.7rem] px-[1.5rem] rounded-[10%] font-serif">
            Browse All
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
