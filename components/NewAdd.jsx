"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import axios from "axios";
import  { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";




const NewAdd = () => {
  const router = useRouter();
  const swiper = useSwiper();
  const [data, setData] = useState([""]);

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/newAdd");
    setData(res.data.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const sliderSettings = {
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1350: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <div className="flex justify-center text-[2.3rem] anton-font font-[800] my-[2rem]">
        Latest Products
      </div>

      <div className="flex justify-center w-[80%] overflow-hidden container mb-[2rem]">
        <Swiper
          spaceBetween={300}
          pagination={true}
          modules={[Pagination]}
          {...sliderSettings}
        >
          {data.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[29rem] w-[22rem] bg-[#fafafa]  rounded-xl overflow-hidden cursor-pointer">
                <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[22rem] object-cover overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt="Product Image"
                    className="w-[25rem]"
                  />
                </div>
                <div className="flex justify-between px-[1rem]">
                  <div>
                    <h1 className="font-bold text-[1.3rem] ">{product.name}</h1>
                    <p className="font-bold text-[1rem]">
                      ₹{product.price}{" "}
                      <span className="text-[#68d2c7] text-[0.9rem]">
                        60%off
                      </span>
                    </p>
                    <p>⭐4.5|9</p>
                  </div>
                  <div
                    className="bg-black w-[7rem] h-[2.5rem] items-center px-[0.3rem]  py-[0.3rem] text-white justify-center text-center self-center rounded-lg cursor-pointer"
                    onClick={() => router.push(`/product/${product.slug}`)}
                  >
                    Check Now
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NewAdd;


