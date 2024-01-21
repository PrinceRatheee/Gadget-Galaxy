"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
  const router=useRouter();
  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      // Use localStorage only in the browser environment
      localStorage?.removeItem('cart');
    }
  }, []);
  return (
    <div className="flex flex-col gap-[1rem] min-h-[90vh] items-center justify-center ">
            <h3 className="font-bold text-[4rem] mb-[-1rem] text-[#A2FF86]">Congrats</h3>
            <p className="text-gray-500 text-[1.3rem] font-semibold">Your Order has been initiated.</p>
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