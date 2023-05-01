import passport from "passport";
import { Router } from "express";
import { getAllOrganizations } from "../controllers/organizations.controller.js";

const organizationsRoute = Router();

organizationsRoute.get(
  "/:pName",
  passport.authenticate("current", { session: false }),
  getAllOrganizations
);

export default organizationsRoute;
