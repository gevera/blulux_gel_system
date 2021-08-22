import { writable, derived } from "svelte/store";

export const showMenu = writable(false);
export const productList = writable([]);
export const cart = writable([]);
export const totalCartItems = derived(cart, ($cart) =>
  $cart.reduce((acc, p) => p.qty + acc, 0)
);
export const cartTotal = derived(cart, ($cart) =>
  $cart.reduce((acc, p) => p.price * p.qty + acc, 0)
);
export const categories = derived(productList, ($productList) => [
  // "all",
  ...new Set(
    $productList.map((p) =>
      p?.metadata?.category ? p?.metadata?.category : "specials"
    ).reverse()
  ),
]);

export const categoriesProd = derived(
  [productList, categories],
  ([$productList, $categories]) =>
    $categories.map((c) => ({
      name: c,
      products: $productList.filter((p) => {
        if (c != "specials" && p.metadata?.category == c) {
          return p;
        } else if (c == "specials" && !p.metadata.hasOwnProperty("category")) {
          return p;
        }
      }),
    })).reverse()
);

export const selectedCategory = writable("all");