import { stripe } from "../../server";


export async function post(req, res) {
  try {
    const { cart } = req.body;
        
    const cartTotal = cart.reduce((acc, p) => p.price * p.qty + acc, 0);
    const freeShipping = cartTotal >= 2000;
    // console.log("CART IN CHECKOUT", cart);
   
    const lineItems = cart.map((p) => ({
      price: p.id,
      quantity: p.qty,
      // adjustable_quantity: {
      //   enabled: true,
      //   minimum: 1,
      //   maximum: 10,
      // },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      allow_promotion_codes: true,
      success_url:
        "https://bluluxshop.com/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://bluluxshop.com/cancel",
      billing_address_collection: "auto",
      shipping_rates: freeShipping
        ? ["shr_1JP98AE2Lv1oi1f0hrGe5HNg"]
        : ["shr_1JP86sE2Lv1oi1f06r4LQ5Rq"],
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      line_items: lineItems,
    });
    res.json(session.id);
  } catch (error) {
    console.log(error);
  }
}
