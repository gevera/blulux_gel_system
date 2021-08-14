import { stripe } from "../../server";

import fetch from "node-fetch";

export async function post(req, res) {
  try {
    const { session_id } = req.body;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    let now = new Date().getTime();
    const telegaObj = {
      name: session?.shipping?.name,
      telephone: session?.customer_details?.email,
      message: `Order has been made!
      Confirmation number <b>${session.payment_intent
        .slice(-6)
        .toUpperCase()}</b>
      Total amount <b>${(session.amount_total / 100).toFixed(2)}</b>`,
      time: new Date(now - (3600000*4)).toLocaleString("en-GB"),
      group: "olesea blulux",
    };

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

    // const customer = await stripe.customers.retrieve(session.customer);
    // console.log("SESSION", session);
    // console.log("CUSTOMER", customer);
    res.json({ session });
  } catch (error) {
    console.log(error);
  }
}
