"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlFor } from "../../lib/sanity";
import Related from "../../../components/Related";
import { useContext } from "react";
import { StateContext } from "../../../context/StateContext";
import { useRouter } from "next/navigation";

export const dynamic="force-dynamic";
const page = ({ params }) => {
  
  const [productData, setProductData] = useState([""]);
  const [firstImage, setFirstImage] = useState(null);
  const {decQty,incQty,qty,onAdd,cartItems}=useContext(StateContext);
  const [product,setProduct]=useState([{
    name:String,
    id:String,
    img:String, 
    price:Number,
    quantity:Number,
  }]);
  const router=useRouter();
  console.log("qty",qty);
  // console.log("slug", params.slug);
  const getUserDetails = async () => {
    const data = {
      slug: params.slug,
    };
    const res = await axios.post("/api/users/product", data);
    // console.log("dashboard data from token",res.data);
    setProductData(res?.data?.data);
    setFirstImage(res?.data?.data?.firstImage);
    setProduct([
      // ...cartItems,
      {name:res?.data?.data?.name,
      id:res?.data?.data?._id,
      img:res?.data?.data?.firstImage,
      price:res?.data?.data?.price,
      slug:res?.data?.data?.slug
      }
    ])
  };
  const singleBuy=async()=>{
    try {
      const sendData={product,qty};
       const data=await axios.post("/api/checkout/single",sendData);
      //  console.log(data,"daaataa");
       if(data.status==200){
         router.push(`${data.data.url}`);
       }
       else{
         router.push("/failure")
       }
     } catch (error) {
       console.log(error,"error in frontend checkout");
 
     }
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  // console.log("datafetched", productData);
  
  // console.log("product", product);
  // console.log("producthj", cartItems);
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-16 w-[90%] container mt-[6rem]">
        <div className="flex lg:flex-row flex-col gap-[2rem] lg:w-[50%]">
          <div className="order-last flex flex-wrap gap-4 lg:order-none lg:flex-col">
            {productData?.images?.map((image, idx) => (
           
                <div className="bg-gray-100 flex flex-wrap w-[6rem] justify-center" key={idx}>
                  <img
                    
                    priority
                    src={urlFor(image).url()}
                    alt="product image"
                    className="w-[250%] cursor-pointer"
                    onClick={() => setFirstImage(image)}
                  />
                </div>
              
            ))}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 md:w-[30rem] md:h-[30rem] sm:h-[20rem] sm:w-[20rem]   flex items-center justify-center">
            {firstImage && (
              <img
                priority
                src={urlFor(firstImage).url()}
                alt=""
                className="w-[100%] cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {productData?.categoryName}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
              {productData?.name}
            </h2>
          </div>
          <div className=" flex items-center gap-3 md:mb-5">
            <span className="mb-0.5 inline-block text-gray-500">
              4.2⭐ 56 Ratings{" "}
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-1xl font-bold text-gray-800 md:text-3xl">
                 ${((productData?.price)/100).toFixed(2)}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${(((productData?.price)/100) + 23).toFixed(2)}
              </span>
            </div>
            <span className="text-sm text-gray-500"> Inc. all GST</span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <span className="text-sm">2-4 days shipping time</span>
          </div>
          <div className="w-[100%] mb">
            <p className="my-6 text-base text-gray-500 tracking-wide w">
              {productData?.description}
            </p>
          </div>
              
          <div className="quantity mb-[2rem]">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>-</span>
              <span className="num">{qty}</span>
              <span className="plus"  onClick={incQty}>+</span>
            </p>
          </div>
          <div className="flex gap-2.5">
            <button 
              className="bg-red-500  py-[0.6rem] w-[8.5rem]   text-white rounded-md font-semibold cursor-pointer flex px-[1.5rem] "
              onClick={()=>onAdd(product,qty)}  
            >
              Add to Cart
            </button>
            <button className="bg-gray-200  py-[0.6rem] w-[8.5rem]   text-black rounded-md font-semibold cursor-pointer flex px-[2.2rem] " onClick={()=>singleBuy()}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[90%] container mt-[5rem]">
        {productData?.categoryName && (

          <Related category={productData.categoryName}/>
        )}
      </div>
    </>
  );
};

export default page;
