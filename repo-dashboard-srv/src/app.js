import express from "express";
import passport from "passport";
import flash from "express-flash";
import authRoute from "./routes/auth.route.js";
import initializePassport from "./config/passport.config.js";
import userRoute from "./routes/user.route.js";
import panelsRoute from "./routes/panels.route.js";
import organizationsRoute from "./routes/organizations.route.js";
import retailerStoresRoute from "./routes/retailerStores.route.js";
import retailersRoute from "./routes/retailers.route.js";
import indicatorsRoute from "./routes/indicators.route.js";
import workingInStoreRoute from "./routes/workingInStore.route.js";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(flash());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/*Inicializa la configuracion de passport */
initializePassport();

app.use(passport.initialize());

app.use(`${config.BASE_API_URL}/auth`, authRoute);
app.use(`${config.BASE_API_URL}/users`, userRoute);
app.use(`${config.BASE_API_URL}/panels`, panelsRoute);
app.use(`${config.BASE_API_URL}/organizations`, organizationsRoute);
app.use(`${config.BASE_API_URL}/retailers`, retailersRoute);
app.use(`${config.BASE_API_URL}/stores`, retailerStoresRoute);
app.use(`${config.BASE_API_URL}/indicators`, indicatorsRoute);
app.use(`${config.BASE_API_URL}/workingInStore`, workingInStoreRoute);

const httpServer = app.listen(config.PORT, () => {
  console.log(`Server running on port: ${httpServer.address().port}`);
});
httpServer.on("error", (error) => console.log("Server error -> ", error));
