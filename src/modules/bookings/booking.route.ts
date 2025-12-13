
import { Router } from "express";
import { bookingControllers } from "./booking.controller";
import auth from "../../middleware/auth";




const router = Router()

router.post(
  "/bookings",
  auth("admin", "Customer"),
  bookingControllers.addBooking
);

router.get(
  "/bookings",
  auth("admin", "Customer"),
  bookingControllers.getBookings
);

router.put(
  "/bookings/:bookingId",
  auth("admin", "Customer"),
  bookingControllers.updateBooking
);

export const bookingRoute = router