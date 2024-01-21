
import { client, urlFor } from "../app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(){
  const query="*[_type == 'heroImage'][0]";
  const data=await client.fetch(query);
  return data;
}

const Topsection = async() => {
  const data = await getData();
  return (
    <div className="container w-[90%] flex   flex-wrap  mx-8 bg-[#dbdbdb] md:justify-between justify-center px-[2rem] pb-[3rem] pt-[4rem] rounded-xl">
      <div className=" flex flex-col md:gap-[0.5rem]  text-left">
        <h3 className="mukta-font text-[1.2rem] mb-[-1.2rem] ">Beats solo</h3>
        <h2 className="anton-font font-bold text-[4.2rem]   md:mb-[7rem] mb-[-30px]">
          Wireless  
        </h2>
        <div className="md:absolute sm:top-[35%] md:top-[17rem] 2xl:top-[35%] xl:top-[33%] lg:top-[15rem] head-text anton-font md:text-[5.5rem] lg:text-[7.5rem] text-[3rem] font-extrabold z-0 pt-0 md:mt-[0.5rem]  text-white">
          <h1>HEADPHONE</h1>
        </div>
        <Link href="/headphones">
          <button className="bg-red-500 px-[1.6rem] py-[0.6rem] w-[12.5rem]   text-white rounded-xl cursor-pointer flex ">
            Shop All headphone
          </button>
        </Link>
      </div>

      <div>
        <Link href="/product/boat-immortal-1000d">
          <Image
            src={urlFor(data.image).url()}
            alt="Product Image"
            height={200}
            width={400}
            priority
            className=" z-[3] lg:w-[30vw] md:w-[40vw] md:relative md:right-[6vw] md:top-[2rem] w-[50vw] md:self-start self-center"
          ></Image>
        </Link>
      </div>

      <div className="w-[16rem] self-end  ">
        <div className="font-bold  md:text-left text-center">Description</div>
        <div className="text-gray-500 md:text-left text-center">
          Quality you can hear, style you can see. Transform your listening
          experience with our headphones.
        </div>
      </div>
    </div>
  );
};

export default Topsection;
