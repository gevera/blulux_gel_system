import { stripe } from "../../server";
import { mergeProductList } from "../../helpers";

export async function get(req, res) {
  let { data: prices } = await stripe.prices.list({
    expand: ["data.product"],
    active: true,
    limit: 100
  });

  if(prices.length >= 100) {
    const { data: morePrices } = await stripe.prices.list({
      expand: ["data.product"],
      active: true,
      limit: 100,
      starting_after: prices[prices.length -1]?.id
    });
    prices = [...prices, ...morePrices]
  }

  // console.log("PRICES =============>", prices);
  const product_list = mergeProductList(prices);
  res.json({ data: product_list });
}
