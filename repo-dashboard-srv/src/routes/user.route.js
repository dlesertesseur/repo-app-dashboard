import passport from "passport";
import { Router } from "express";
import { findById } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.get(
  "/:uid",
  passport.authenticate("current", { session: false }),
  findById
);

export default userRoute;
