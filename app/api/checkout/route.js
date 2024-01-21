import { NextResponse } from "next/server";
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);
export async function POST( req){
    try {
        const reqBody=await req.json();
        const {cart}=reqBody
        // console.log(cart,"boooooody");
        const session=await stripe.checkout.sessions.create({
            payment_method_types:["card"],

            mode:"payment",
            line_items:cart.map(item=>{
                return{
                    price_data:{
                        currency:'usd',
                        product_data:{
                            name:item[0]?.name
                        },
                        unit_amount:item[0].price
                    },
                    quantity:item[1].quantity

                }
            }),
            success_url: process.env.SUCCESS_PAGE_URL,
            cancel_url: process.env.FAILURE_PAGE_URL,
        })
        return NextResponse.json({
            url:session.url,
            
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status:400
          
        })
    }
}