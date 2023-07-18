import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || ""

const stripe = new Stripe(key,{
    apiVersion: "2022-11-15"
})

export async function POST(request:NextRequest){
    const body= await request.json()
    try {
        if(body.length>0){
            const session = await stripe.checkout.sessions.create({
                submit_type:"pay",
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection:'auto',
                shipping_options:[
                    { shipping_rate: "shr_1NTIzpExTi1dnMkJSBaCG41r"},
                    { shipping_rate: "shr_1NTIyhExTi1dnMkJmon7xoMI"}
                ],
                line_items:body.map((item:any)=> {
                    return {
                        price_data:{
                            currency: "usd",
                            product_data: {
                                name:item.name,
                                images: [item.imageurl]
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                    }
                }),
                success_url: `${request.headers.get("origin")}/successfully-payed`,
                cancel_url: `${request.headers.get("origin")}/payment-cancelled`,
              });
              return NextResponse.json({session})
        }
        else{
            return NextResponse.json({message: "No Data found"})
        }
      } catch (err:any) {
        return NextResponse.json(err.message)
      }
}