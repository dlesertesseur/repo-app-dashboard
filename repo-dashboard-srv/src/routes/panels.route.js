import passport from "passport";
import { Router } from "express";
import { getAllPanels, getPanelByName } from "../controllers/panels.controller.js";

const panelsRoute = Router();

panelsRoute.get(
  "/:pName",
  passport.authenticate("current", { session: false }),
  getPanelByName
);

panelsRoute.get(
  "/",
  passport.authenticate("current", { session: false }),
  getAllPanels
);

export default panelsRoute;
