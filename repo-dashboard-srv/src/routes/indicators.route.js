import passport from "passport";
import { Router } from "express";
import { getAllIndicators, getIndicatorByName } from "../controllers/indicators.controller.js";

const indicatorsRoute = Router();

indicatorsRoute.get(
  "/:pName",
  passport.authenticate("current", { session: false }),
  getIndicatorByName
);

indicatorsRoute.get(
  "/",
  passport.authenticate("current", { session: false }),
  getAllIndicators
);

export default indicatorsRoute;
