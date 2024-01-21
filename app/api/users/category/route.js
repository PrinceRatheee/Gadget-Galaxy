import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity";
export const dynamic="force-dynamic";
export async function POST( request){
    try {
        // console.log("dstuoip");

        const reqBody = await request.json();
        const {category}=reqBody;
        // console.log("reqBody",slug);
        const query=`*[_type=="product" && category->name=="${category}"]{
            _id,
              "imageUrl":images[0].asset->url,
              price,
              name,
              "slug":slug.current,
              "categoryName":category->name,
          }`
          const product = await client.fetch(query);
        //   console.log("product data fetched",product);
          return NextResponse.json({
            status: 200,
            message:"Products fetched",
            data:product,
          
        })
    } catch (error) {
        console.log("error in getting product details");
        console.log(error.message);
    }
}