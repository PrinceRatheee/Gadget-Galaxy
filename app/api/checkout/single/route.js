import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { product, qty } = reqBody;
        // console.log(product, "boooooody");

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items:product.map(item=>{
                return{
                    price_data:{
                        currency:'usd',
                        product_data:{
                            name:item.name
                        },
                        unit_amount:item.price
                    },
                    quantity:qty

                }
            }),
            success_url: process.env.SUCCESS_PAGE_URL,
            cancel_url: process.env.FAILURE_PAGE_URL,
        });
        // console.log("urlllllllllllllll---",session?.url,"    qty-",qty)
        return NextResponse.json({
            url: session?.url,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json({
            status: 400,
        });
    }
}
