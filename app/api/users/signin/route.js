import { connect } from "../../../../utils/database";
import User from "../../../../models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// import { redirect } from "next/navigation";


connect();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        // console.log("gfsdwygw");
        const { email, password } = reqBody;

        // console.log(reqBody);

        // check if user exists 
        const user = await User.findOne({ email });
        // console.log(user);
        if (!user) {
            return NextResponse.json({ message: "Invalid Credentials" }, { success:false },{showToast:true},{status:400})
        }

        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        console.log(validPassword);
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid Credentials" }, { success:false },{showToast:true},{status:400})
        }
        // console.log("verify");
        // console.log(user.isVerified);

        



        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        //create token
        const token =  jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 86400 })
        // console.log(token,"rdxctfvgybh");
        const response = NextResponse.json({
            message: "Login Succesfull",
            success: true,
            status:200
        })

        response.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;




    } catch (error) {
        console.log("SOMETHING WENT WRONG");
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}           