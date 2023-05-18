import passport from "passport";
import { Router } from "express";
import { getAllWorkersInStores } from "../controllers/workingInStore.controller.js";

const workingInStoreRoute = Router();

workingInStoreRoute.get(
  "/",
  passport.authenticate("current", { session: false }),
  getAllWorkersInStores
);

export default workingInStoreRoute;
