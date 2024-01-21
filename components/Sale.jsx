import Image from "next/image";
import React from "react";

const Sale = () => {
  return (
    <>
      <div className="bg-[#F02E35] flex lg:flex-row flex-col   justify-between items-center md:p-[3rem]  sm:items-center md:items-start w-[80%] 2xl:mt-[15rem] mt-[4rem]  md:h-[60vh] sm:h-[40vh] h-[65vh] container rounded-[5rem] mb-[3rem] md:mt-[12rem]  max-[500px]:h-[46vh] max-[400px]:h-[56vh]   max-[550px]:pt-[4vh] max-[500px]:pl-[2.5vh]">
        <div className="flex flex-col self-end text-white max-w-[20rem]">
          <p className="lg:hidden block">20% OFF</p>
          <h1 className="anton-font text-[3rem] font-extrabold leading-[110%] lg:hidden block">Season Sale</h1>
          <p className="lg:hidden block">Beats Solo Air</p>
          <h1 className="anton-font text-[5rem] font-extrabold leading-[110%]">FINE SMILE</h1>
          <p>15 NOV to 7 DEC</p>
        </div>
        <div >
          <img src="/headphones/headphones_c_1.webp" alt="Product Image" className="relative bottom-[15rem] 2xl:w-[35rem] 2xl:bottom-[20rem] xl:w-[30rem] lg:w-[190rem] lg:block hidden" />
        </div>
        <div >
          <img src="/headphones/headphones_c_1.webp" alt="Product Image" className="relative md:bottom-[26rem] lg:hidden md:block w-[400px] bottom-[20rem]" />
        </div>
        <div className=" flex-col lg:flex hidden  text-white self-center gap-[0.8rem]">
        <h1 className="anton-font text-[3rem] font-extrabold leading-[110%]">Season Sale</h1>
          <p>Beats Solo Air</p>
        </div>
      </div>
    </>
  );
};

export default Sale;
