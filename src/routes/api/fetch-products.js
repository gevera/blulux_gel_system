import { stripe } from "../../server";
import { mergeProductList } from "../../helpers";

let counter = 1;

export async function get(req, res) {
  const { data: prices } = await stripe.prices.list({
    expand: ["data.product"],
  });
  console.log('Fetched!', counter++)
    console.log("PRICES =============>", prices);
  const product_list = mergeProductList(prices);
  res.json({ data: product_list });
}
