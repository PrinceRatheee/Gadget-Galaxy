
import jwt from "jsonwebtoken";
export const getDataFromToken=(request)=>{
    try {
        const token=request.cookies.get("token")?.value || '';
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET);
        return decodeToken.id;
    } catch (error) {
        throw new Error(error.message)
        console.log(error,"----------expired")
    }
}