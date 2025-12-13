import { Request, Response } from "express";
import { vehicleServices } from "./vehicle.service";





const createVehicle = async(req:Request, res:Response) =>{
  try {
    const result = await vehicleServices.createVehicleIntoDB(req.body)
     return res.status(201).json({
        success: true,
        message: "Vehicle created",
        data: result.rows[0]
    });
  } catch (error:any) {
     return res.status(500).json({
        success: true,
        message: error.message,
        
    });
  }
}

export const vehicleController = {
    createVehicle
}