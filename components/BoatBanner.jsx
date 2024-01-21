"use client"
import React from "react";

const BoatBanner = () => {
  return (
    <div className="bg-[#d1d8e6] flex justify-center overflow-hidden mt-[2rem]">
      {/* Left Side  */}
      <div className="flex flex-col items-center justify-center gap-[1rem] relative left-[10%] w-[60%]">
        <h1 className="text-[3rem] font-bold flex justify-center">ALL</h1>
        <div>
            <svg
            id="Group_205728"
            data-name="Group 205728"
            xmlns="http://www.w3.org/2000/svg"
            width="151.848"
            height="62.372"
            viewBox="0 0 151.848 62.372"
            
            >
            <g
                id="Group_208975"
                data-name="Group 208975"
                transform="translate(0 0)"
            >
                <path
                id="Path_1"
                data-name="Path 1"
                d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321"
                transform="translate(-268.85 -104.669)"
                fill="#1a2024"
                />
                <path
                id="Path_2"
                data-name="Path 2"
                d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z"
                transform="translate(-776.859 -0.1)"
                fill="#1a2024"
                />
                <path
                id="Path_3"
                data-name="Path 3"
                d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z"
                transform="translate(-513.351 -105.768)"
                fill="#ed1c24"
                />
                <path
                id="Path_4"
                data-name="Path 4"
                d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4"
                transform="translate(0 0.001)"
                fill="#1a2024"
                />
            </g>
            </svg>
         </div>
         <h1 className="text-center text-[3rem] font-bold">Products are available</h1>
         <h1 className="text-center text-[2rem] text-gray-800">Exclusively in our store.</h1>
         
      </div>
      {/* Right Side  */}
      <div>
        <img src="/banner/90048152.cms" alt="Product Image" className="xl:w-[63%] lg:w-[35rem] sm:w-[30rem] md:w-[58rem] hidden md:block  md:ml-[35%] xl:ml-[53%] lg:ml-[38%] " />
      </div>
    </div>
  );
};

export default BoatBanner;
