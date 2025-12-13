import express, { Request, Response } from "express"
import { userRoute } from "./modules/users/user.route";
import { initDB } from "./Config/db";
import { authRoute } from "./modules/auth/auth.route";
import { vehicleRoute } from "./modules/vehicles/vehicle.route";
import { bookingRoute } from "./modules/bookings/booking.route";
const app = express()
app.use(express.json());

initDB();








app.use("/api/v1/users", userRoute)
app.use("/api/v1/vehicles", vehicleRoute)
app.use("/api/v1/bookings", bookingRoute)
app.use("/api/v1/auth", authRoute)






app.get('/', (req:Request, res:Response) =>{
    res.status(200).json({
        message:"this is the root route",
        path:req.path
    })
})

app.listen(5000,() =>{
    console.log("Server is running on post 5000")
})