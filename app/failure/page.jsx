"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router=useRouter();
  return (
    <div className="flex flex-col gap-[1rem] min-h-[90vh] items-center justify-center ">
            <h3 className="font-bold text-[4rem] mb-[-1rem] text-[#FF004D]">Sorry </h3>
            <p className="text-gray-500 text-[1.3rem] font-semibold">Some Error occured .Please try again.</p>
            <button 
                className="bg-red-500 hover:bg-red-600  py-[0.6rem] w-[10rem]   text-white rounded-xl cursor-pointer flex justify-center "
                onClick={()=>{router.push("/")}}
            >
                Go Back To Home
            </button>
        </div>
  )
}

export default page