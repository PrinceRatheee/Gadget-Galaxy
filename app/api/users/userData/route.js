import { NextResponse } from "next/server";
import { getDataFromToken } from "../../../../helpers/getDataFromToken";
import User from "../../../../models/user";
import { connect } from "../../../../utils/database";


export async function GET(request){
    try {
        connect();
        // console.log("56213054321feds0-");
        const token=request.cookies.get("token")?.value ;
        if(!token){
            return NextResponse.json({
                status: 200,
                message:"User is not signedin",
                data:0
            })
        }
        

        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId}).select("-password");
        if(!user){
            
            return NextResponse.json({
                status: 400,
                message:"Some error occured, please logout and signin again",
                
            })
        }
        // console.log("request received at address route",userId);
        return NextResponse.json({
            status: 200,
            message:"User Found",
            data:user
        })
    } catch (error) {
        console.log(error,"----------expired");
        return NextResponse.json({
            status: 400,
            message:"JWT expired",
            
        })
    }
}