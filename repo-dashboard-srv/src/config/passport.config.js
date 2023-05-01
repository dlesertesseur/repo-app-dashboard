import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";

import { authenticate, registerUser } from "../services/auth.service.js";
import { findByEmail } from "../services/user.service.js";
import { createHash } from "../util/Crypt.js";
import config from "./config.js";

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    try {
      const user = await findByEmail(email);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  const cookieExtractor = (req) =>{
    let token = null;
    if (req && req.cookies) {
      token = req.cookies["authToken"];
    }
    return(token);
  }

  passport.use(
    "current",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: config.SESSION_SECRET,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          console.log("JWTStrategy -> error", error)
          return done(error);
        }
      }
    )
  );
};

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, username, password, done) => {
      try {
        const newUser = { ...req.body };
        newUser.password = createHash(newUser.password);
        const user = await registerUser(newUser);
        done(null, user);
      } catch (error) {
        done(null, {error:error.message});
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    async (req, username, password, done) => {
      try {
        const user = await authenticate({
          email: username,
          password: password,
        });

        done(null, user);
      } catch (error) {
        done(null, error );
      }
    }
  )
);

export default initializePassport;
