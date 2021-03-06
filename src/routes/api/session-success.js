import { stripe } from "../../server";

import fetch from "node-fetch";
import { db, sendMail_now } from "../../server";
import { findOrder, createOrder } from "../../helpers";

export async function post(req, res) {
  try {
    const { session_id } = req.body;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const name = session?.shipping?.name;
    const { city, country, line1, line2, postal_code } =
      session?.shipping?.address;
    const email = session?.customer_details?.email;
    const telephone = session?.customer_details?.phone;
    const confirmNumber = session.payment_intent.slice(-7).toUpperCase();
    const totalAmount = (session.amount_total / 100).toFixed(2);
    const now = new Date().getTime();

    const telegaObj = {
      name,
      telephone: `${telephone} || ${email}`,
      message: `Order has been made!
      Confirmation number:> <b>${confirmNumber}</b>
      Total amount:> <b>${totalAmount}</b>
      Address:> ${country} ${city} ${line1} ${line2} ${postal_code}`,
      time: new Date(now + 3600000 * 1).toLocaleString("en-GB"),
      group: "olesea blulux",
    };

    const resFind = await db.query(findOrder, [confirmNumber]);

    if (resFind.rows.length) {
      console.log("RESULT FOUND ====>", resFind.rows);
    } else {
      console.log("Writing to DB new order! =====>");
      const resCreateOrder = await db.query(createOrder, [
        name,
        `${telephone} || ${email}`,
        confirmNumber,
        totalAmount,
        city,
        country,
        line1,
        line2,
        postal_code,
      ]);

      const resEmail = await sendMail_now({
        name,
        email,
        confirm_number: confirmNumber,
        city,
        total_amount: totalAmount,
      });

      const resTelega = await fetch("https://bot.skrymenu.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...telegaObj }),
      });

      if (resTelega.ok) {
        console.log("Sent to telega!");
      }
    }

    // const customer = await stripe.customers.retrieve(session.customer);
    // console.log("SESSION", session);
    // console.log("CUSTOMER", customer);
    res.json({ session });
  } catch (error) {
    console.log(error);
  }
}
