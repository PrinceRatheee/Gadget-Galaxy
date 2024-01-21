import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity";
export const dynamic="force-dynamic";
export async function POST( request){
    try {
        // console.log("dstuoip");

        const reqBody = await request.json();
        const {slug}=reqBody;
        // console.log("reqBody",slug);
        const query=`*[_type == 'product' && slug.current=="${slug}"][0]{
            _id,
              _type,
              name,
              price,
              description,
              "categoryName":category->name,
              "slug":slug.current,
              images,
              "firstImage":images[0].asset->url
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