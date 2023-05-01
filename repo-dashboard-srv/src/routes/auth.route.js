import { login, logout, register } from "../controllers/auth.controller.js";
import { Router } from "express";
import passport from "passport";

const authRoute = Router();

authRoute.post("/register", passport.authenticate("register", {session: false}), register);

authRoute.post(
  "/login",
  passport.authenticate("local", {session: false} ),
  login
);

authRoute.get(
  "/logout",
  logout
);

export default authRoute;
