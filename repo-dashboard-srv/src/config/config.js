import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.HTTP_PORT ? process.env.HTTP_PORT : 8080,
  MONGO_URL: process.env.MONGO_URL,
  DB_NAME: process.env.DB_NAME,
  SESSION_SECRET: process.env.SESSION_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
  BASE_API_URL: process.env.BASE_API_URL
};

export default config;
