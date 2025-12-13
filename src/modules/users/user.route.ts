import { Router } from "express";

import { userController } from "./user.controller";
import auth from "../../middleware/auth";


const router = Router()

router.post("/", userController.createUser)
router.get("/", auth("admin"), userController.getAllUser)
router.put("/:userId", auth("Customer", "admin"), userController.updateUser)

export const userRoute = router