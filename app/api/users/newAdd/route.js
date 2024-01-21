import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity";


export async function GET( ){
    try {
        const query = `*[_type == 'product'][0...6] | order(_createdAt desc){
            _id,
              price,
              name,
              "slug":slug.current,
            "categoryName":category->name,
              "imageUrl": images[0].asset->url
              
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


