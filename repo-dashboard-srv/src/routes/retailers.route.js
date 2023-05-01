import passport from "passport";
import { Router } from "express";
import { getAllRetailers } from "../controllers/retailers.controller.js";

const retailersRoute = Router();

retailersRoute.get(
  "/",
  passport.authenticate("current", { session: false }),
  getAllRetailers
);

export default retailersRoute;
