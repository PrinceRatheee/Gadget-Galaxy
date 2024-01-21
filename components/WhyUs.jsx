"use client";
import React from "react";

const WhyUs = () => {
  return (
    <div className="mt-[3rem]">
      <div className="flex justify-center text-[2rem] anton-font font-[600] mb-[2rem]">
        We Offer
      </div>
      <div className="flex items-center w-[80%] container justify-between">
        <div className="flex flex-col ">
          <div>
            <img
              src="/facility/Screenshot 2023-12-04 024028.png"
              alt="Product Image"
              className="w-[8rem]"
            />
          </div>
          <div>
            <h3 className="text-center">1 Year Warranty</h3>
          </div>
        </div>
        <div className="flex flex-col">
            <img src="/facility/Screenshot 2023-12-04 024120.png" alt="Product Image" className="w-[7rem]" />
            <h3 className="text-center">7-day Replacement</h3>
        </div>
        <div className="flex flex-col">
            <img src="/facility/Screenshot 2023-12-04 024152.png" alt="Product Image" />
            <h3 className="text-center">Free Shipping</h3>
        </div>
        
      </div>
    </div>
  );
};

export default WhyUs;
