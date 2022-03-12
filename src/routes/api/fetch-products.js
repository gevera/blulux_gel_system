import { stripe } from "../../server";
import { mergeProductList } from "../../helpers";

// let counter = 1;

export async function get(req, res) {
  const { data: prices } = await stripe.prices.list({
    expand: ["data.product"],
    limit: 100
  });

  const filterArchivedPrices = prices.filter(p => p.active)
  // console.log("Fetched!", counter++);
  // console.log("PRICES =============>", prices);
  const product_list = mergeProductList(filterArchivedPrices);
  res.json({ data: product_list });
}
