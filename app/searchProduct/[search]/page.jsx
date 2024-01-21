"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export const dynamic="force-dynamic";
const page = ({ params }) => {
  const router = useRouter();
  const [productData, setProductData] = useState([""]);
  // console.log("category", params.category);
  const getProductDetails = async () => {
    const data = {
      searchText: params.search.replace(/%20/g, " "),
    };
    const res = await axios.post("/api/users/searchProduct", data);
    // console.log("dashboard data from token",res.data);
    setProductData(res?.data?.data);
    console.log(res?.data?.data);
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  console.log(params.search, "paraams", productData);
  return (
    // <div>page {searchText}</div>
    <div className="bg-white">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for your Search
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData?.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                  width={300}
                  height={300}
                  onClick={() => router.push(`/product/${product.slug}`)}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
