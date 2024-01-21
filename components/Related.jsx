import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

const Related = ({ category }) => {
  const router = useRouter();
  const swiper = useSwiper();
  const sliderSettings = {
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  };
  const [categoryData, setCategoryData] = useState([""]);
  // console.log("category", category);
  const getUserDetails = async () => {
    const data = {
      category: category,
    };
    const res = await axios.post("/api/users/category", data);
    // console.log("dashboard data from token",res.data);
    setCategoryData(res.data.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  // console.log("fetched data", categoryData);
  return (
    <div className="bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Other products you may like
          </h2>
        </div>
      
      <div className="flex justify-center  overflow-hidden container my-[2rem]">
          <Swiper
            spaceBetween={340}
            // slidesPerView={3}
            // navigation={true}
            pagination={true}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            {...sliderSettings}
          >
            {categoryData.map((product, idx) => (
              <>
                <SwiperSlide className="flex justify-center">
                  <div
                    key={idx}
                    className="h-[29rem] w-[22rem] bg-[#fafafa]  rounded-xl overflow-hidden cursor-pointer "
                  >
                    <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[22rem] object-cover overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt="Product Image"
                        className="w-[25rem]"
                      />
                    </div>
                    
                    <div className="flex justify-between px-[1rem]">
                      <div>
                        <h1 className="font-bold text-[1.3rem] ">
                          {product.name}
                        </h1>
                        <p className="font-bold text-[1rem]">
                          ${((product?.price)/100).toFixed(2)} {" "}
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
              </>
            ))}

            <div className="h-[5rem] w-[100%]"></div>
          </Swiper>
        </div>
    </div>
  );
};

export default Related;
