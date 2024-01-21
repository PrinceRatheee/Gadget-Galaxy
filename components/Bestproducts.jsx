"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

import axios from "axios";
import { useRouter } from "next/navigation";

// ... (previous imports)

const Bestproducts = () => {
  const router = useRouter();

  const [data, setData] = useState([""]);
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/bestSeller");
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
      950: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <div className="flex justify-center text-[2.3rem] anton-font font-[800] mb-[2rem]">
       Best Seller Products
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
              <div className="h-[29rem] w-[22rem] bg-[#fafafa]  rounded-xl  " key={idx}>
                <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[22rem] object-cover overflow-hidden">
                  <img
                    src={product?.imageUrl}
                    alt="Product Image"
                    className="w-[25rem] cursor-pointer"
                    onClick={() => router.push(`/product/${product?.refSlug}`)}
                  />
                </div>
                <div className="flex justify-between px-[1rem]">
                  <div>
                    <h1 className="font-bold text-[1.5rem] ">{product?.name}</h1>
                    <p className="font-bold text-[1rem]">
                      ${((product?.price)/80).toFixed(2)} <span className="text-[#68d2c7] text-[0.9rem]">60%off</span>
                    </p>
                    <p>{`⭐${product?.rating}|${product?.ratingOutOf}`}</p>
                  </div>
                  <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem]  py-[0.3rem] text-white justify-center text-center self-center rounded-lg" onClick={() => router.push(`/product/${product?.refSlug}`)}>
                    Buy Now
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="h-[5rem] w-[100%]"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Bestproducts;

