import sirv from "sirv";
import express from "express";
import cors from "cors";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV, STRIPE_SECRET_KEY_TEST, STRIPE_SECRET_KEY } =
  process.env;
const dev = NODE_ENV === "development";
const app = express();
export const stripe = require("stripe")(
  dev ? STRIPE_SECRET_KEY_TEST : STRIPE_SECRET_KEY,
  {
    apiVersion: "2020-08-27",
  }
);

app
  .use(
    express.json(),
    express.urlencoded({ extended: true }),
    cors({ origin: true }),
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
