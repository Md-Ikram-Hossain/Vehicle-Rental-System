import { Router } from "express";
import { vehicleControllers } from "./vehicle.controller";
import auth from "../../middleware/auth";



const router = Router()

router.post("/", auth("admin"), vehicleControllers.createVehicle);
router.get("/", vehicleControllers.getAllVehicle);
router.get("/:vehicleId", vehicleControllers.getSingleVehicle);
router.put(
  "/:vehicleId",
  auth("admin"),
  vehicleControllers.updateSingleVehicle
);
router.delete(
  "/:vehicleId",
  auth("admin"),
  vehicleControllers.deleteSingleVehicle
);

export const vehicleRoute= router