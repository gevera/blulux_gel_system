import sirv from "sirv";
import express from "express";
import cors from "cors";
import compression from "compression";
import * as sapper from "@sapper/server";
import sendGridMail from "@sendgrid/mail";

import { pool_db, sendEmail } from "../src/helpers";

export const {
  PORT,
  NODE_ENV,
  STRIPE_SECRET_KEY_TEST,
  STRIPE_SECRET_KEY,
  SENDGRID_API_KEY,
} = process.env;

const dev = NODE_ENV === "development";
const app = express();

export const db = pool_db();

db.query("SELECT NOW() as now;")
  .then((res) => {
    console.log(`Success! Connected to DB at ${res.rows[0].now}!`);
  })
  .catch((e) => console.error(e.stack));

sendGridMail.setApiKey(SENDGRID_API_KEY);

export const sendMail_now = async ({
  name,
  email,
  total_amount,
  confirm_number,
  city,
}) => {
  try {
    const resEmail = await sendEmail(sendGridMail, {
      name,
      email,
      total_amount,
      confirm_number,
      city,
    });
    console.log(resEmail);
  } catch (error) {
    console.log(error);
  }
};

// sendMail_now({
//   name: "Olesya",
//   email: "skryonline@gmail.com",
//   city: "London",
//   confirm_number: "HFKGNSZ",
//   total_amount: 25.8,
// });

export const stripe = require("stripe")(
  // dev ? STRIPE_SECRET_KEY_TEST : STRIPE_SECRET_KEY,
  STRIPE_SECRET_KEY,
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
