import { stripe } from "../../server";

const shippingRates = {
  international: ["shr_1JmF9aE2Lv1oi1f0S8RTQvRi"],
  standard: ["shr_1JSO2JE2Lv1oi1f0DKa0ZCxe"],
  free: ["shr_1JPsUAE2Lv1oi1f0l8dqMIPb"],
};

export async function post(req, res) {
  try {
    const { cart, countryCode } = req.body;
    let freeShipping = false;

    const cartTotal = cart.reduce((acc, p) => p.price * p.qty + acc, 0);

    const lineItems = cart.map((p) => ({
      price: p.id,
      quantity: p.qty,
      // adjustable_quantity: {
      //   enabled: true,
      //   minimum: 1,
      //   maximum: 10,
      // },
    }));

    if (
      (countryCode == "GB" && cartTotal >= 2500) ||
      (countryCode != "GB" && cartTotal >= 8000)
    ) {
      freeShipping = true;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      allow_promotion_codes: true,
      success_url:
        "https://bluluxshop.com/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://bluluxshop.com/cancel",
      billing_address_collection: "auto",
      shipping_rates: freeShipping
        ? shippingRates.free
        : countryCode == "GB"
        ? shippingRates.standard
        : shippingRates.international,
      shipping_address_collection: {
        allowed_countries: [
          "GB",
          "IE",
          "BE",
          "CZ",
          "CY",
          "ES",
          "PT",
          "FR",
          "DE",
          "IT",
          "RO",
          "NL",
          "AU",
          "US",
          "CA",
        ],
      },
      line_items: lineItems,
    });
    res.json(session.id);
  } catch (error) {
    console.log(error);
  }
}
