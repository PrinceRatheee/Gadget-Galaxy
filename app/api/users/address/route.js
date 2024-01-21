import { NextResponse } from "next/server";
import { getDataFromToken } from "../../../../helpers/getDataFromToken";
import User from "../../../../models/user";
import { connect } from "../../../../utils/database";


export async function GET(request){
    try {
        connect();
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId}).select("-password");
        if(!user){
            
            return NextResponse.json({
                status: 400,
                message:"Some error occured, please logout and signin again",
                data:user
            })
        }
        // console.log("request received at address route",userId);
        return NextResponse.json({
            status: 200,
            message:"User Found",
            data:user
        })
    } catch (error) {
        console.log(error);
    }
}
export async function POST(request){
    try {
        connect();
        const reqBody = await request.json();
        
        const address = reqBody;
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId}).select("-password");
        if(!user){
            
            return NextResponse.json({
                status: 400,
                message:"Some error occured, please logout and signin again",
                data:user
            })
        }
        console.log("post request received at address route",address);
        if(user.address.length>0){
            user.address[0]=address
        }
        else{
            user.address.push(address);
        }
        await user.save();
        return NextResponse.json({
            status: 200,
            message:"Your address has been Saved",
            data:user
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 400,
            message:"Internal server Error . Please try again later.",
            
        })
    }
}