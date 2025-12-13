import { Request, Response } from "express";
import { authServices } from "./auth.service";


const signInUser = async (req: Request, res: Response) =>{
      try {
        const result = await authServices.signInUserIntoDb(req.body.email, req.body.password)
         return res.status(201).json({
            success: true,
            message: "User created",
            data: result,
        });
      } catch (error:any) {
         return res.status(500).json({
            success: true,
            message: error.message,
            
        });
      }
}

export const authController = {
    signInUser
}