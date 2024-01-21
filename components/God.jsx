"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const God = () => {
  const ref = useRef(null);
  const reference = useRef(null);
  const iref = useRef(null);
  const isInView = useInView(iref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "3.5, 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleImgProgress = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const scaleboatsProgress = useTransform(
    scrollYProgress,
    [0.3, 1],
    [800, -50]
  );
  const scaleappleProgress = useTransform(
    scrollYProgress,
    [0.1, 1],
    [400, -100]
  );
  const scaleblackBudsProgress = useTransform(
    scrollYProgress,
    [0.3, 1],
    [800, 0]
  );
  const scaleblackBuds2Progress = useTransform(
    scrollYProgress,
    [0.3, 1],
    [200, -500]
  );

  const variants = {
    initial: {
      x: 300,
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",

        damping: 300,
        stiffness: 360,
        duration: 8,
        bounce: 0,
      },
    },
  };

  return (
    <div className="bg-black   pb-[3rem] mt-[3rem] overflow-hidden">
      <div className="text-white w-[70%] container pt-[3rem] items-center justify-center">
        <motion.div className="container flex flex-col ">
          <motion.h2
            className="anton-font md:text-[2.5rem]   md:text-center"
            ref={ref}
            style={{ scale: scaleProgress, opacity: scaleProgress }}
          >
            Experience the future of sound with our cutting-edge earbuds.
            Elevate your audio game to new heights, immersing yourself in
            crystal-clear sound and embracing wireless convenience. Discover the
            perfect blend of style, performance, and innovation , it's time to
            upgrade your listening experience
          </motion.h2>
        </motion.div>

        <motion.div
          className=" justify-center hidden lg:flex"
          style={{ y: scaleImgProgress }}
        >
          <Image src="/black.png" alt="Product Image" width={400} height={100}></Image>
        </motion.div>
        <motion.div
          className=" justify-center hidden md:flex lg:hidden"
          style={{ y: scaleblackBuds2Progress }}
        >
          <Image src="/black.png" alt="Product Image" width={400} height={100}></Image>
        </motion.div>
        <motion.div
          className=" h-[25rem] w-[25rem] md:hidden block"
          style={{
            y: scaleblackBudsProgress,
            backgroundImage: "url(/airpodes.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>
      </div>
      <div className=" flex  items-center justify-center  lg:mt-[10rem] md:mt-[5rem] mt-0 mx-2">
        {/* left part */}
        <motion.div
          className=" h-[25rem] w-[50rem] lg:flex hidden items-center justify-end "
          ref={reference}
        >
          <motion.div
            className=" h-[90%] w-[80%] md:block hidden"
            style={{
              y: scaleboatsProgress,
              backgroundImage: "url(/airpodes.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          className=" h-[25rem] w-[50rem] md:flex hidden lg:hidden items-center justify-end "
          ref={reference}
        >
         
          <motion.div
            className=" h-[90%] w-[80%] md:block hidden "
            style={{
              y: scaleappleProgress,
              backgroundImage: "url(/airpodes.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
         
        </motion.div>
        <motion.div
          className="flex flex-col text-white gap-[1rem] justify-start"
          ref={iref}
          style={{ x: isInView ? "0" : "100px", transition: "3s all" }}
        >
          <h1 className="text-[3rem]">Apple Airpodes Pro</h1>
          <p>⭐⭐⭐⭐⭐ 2,666</p>
          <p>6K+ bought in past month</p>
          <h3 className="text-[2rem]"> ₹ 18,990</h3>
          <Link href="product/apple-airpodes-pro">
            <button className="w-[100%] text-red-500 bg-[#EBEBEB] px-[1rem] py-[0.5rem] rounded-[1rem] cursor-pointer">
              Shop Now
            </button>
          </Link>

          <p>FREE Delivery</p>
        </motion.div>
      </div>
    </div>
  );
};

export default God;
