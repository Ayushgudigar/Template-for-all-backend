import { ApiResponce } from '../utils/api-responce.js';
import { asyncHandler } from '../utils/async-hanler.js';
/**
export const HealthCheck = async(req, res,next) => {
    try {
        const user=await getuserDb()
        return res.status(200).json(new ApiResponce(200, { message: "Server is healthy" }, null));
    } catch (error) {
        next(error)
    }
}
     */
    const HealthCheck=asyncHandler(async(req,res)=>
    {
        return res.status(200).json(new ApiResponce(200,{message:"server is Healthy"},null))
    })
    export {HealthCheck}
