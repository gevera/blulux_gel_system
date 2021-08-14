import fetch from "node-fetch";

export async function post(req, res) {
  try {
    let now = new Date().getTime();
    
    const { name, telephone, message } = req.body;
    const resTelega = await fetch("https://bot.skrymenu.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        telephone,
        message,
        time: new Date(now - 3600000 * 4).toLocaleString("en-GB"),
        group: "olesea blulux",
      }),
    });

    if (resTelega.ok) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

    // const customer = await stripe.customers.retrieve(session.customer);
    // console.log("SESSION", session);
    // console.log("CUSTOMER", customer);
  } catch (error) {
    console.log(error);
  }
}
