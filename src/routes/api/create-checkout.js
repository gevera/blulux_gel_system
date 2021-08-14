import { stripe } from "../../server";

export async function post(req, res) {
  try {
    const { cart } = req.body;
    console.log("CART IN CHECKOUT", cart);

    const lineItems = cart.map((p) => ({
      price: p.id,
      quantity: p.qty,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
      billing_address_collection: "auto",
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
