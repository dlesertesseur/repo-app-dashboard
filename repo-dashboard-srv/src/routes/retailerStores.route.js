import passport from "passport";
import { Router } from "express";
import { getAllByRetailerId } from "../controllers/retailerStores.controller.js";

const retailerStoresRoute = Router();

retailerStoresRoute.get(
  "/:rid",
  passport.authenticate("current", { session: false }),
  getAllByRetailerId
);

export default retailerStoresRoute;
