import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity";
export const dynamic="force-dynamic";

export async function GET( ){
    try {
        const query = `*[_type == 'trendingProducts']{
            name,
              price,
              refSlug,
              rating,
              ratingOutOf,
              "imageUrl":image.asset->url
          }`;
          const products = await client.fetch(query);
        //   console.log("query", products);
      
        return NextResponse.json({
            status: 200,
            message:"Products fetched",
            data:products
        })
        
    } catch (error) {
        console.log("some error occured in fggfh");
        console.log(error.message);
    }
  
}


