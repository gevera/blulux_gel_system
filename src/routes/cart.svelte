<script>
  import { onMount } from "svelte";
  import { cart, cartTotal } from "../helpers/store";
  import { loadStripe } from "@stripe/stripe-js";
  let stripe;
  onMount(async () => {
    // const dev = process.env.NODE_ENV === "development";
    // stripe = await loadStripe(dev ? STRIPE_PUBLIC_KEY_TEST : STRIPE_PUBLIC_KEY);
    stripe = await loadStripe(STRIPE_PUBLIC_KEY);
  });

  
  const createCheckout = async () => {
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: $cart.filter((p) => p.qty != 0) }),
    });
    if (res.ok) {
      const id = await res.json();
      // console.log(id);
      stripe.redirectToCheckout({
        sessionId: id,
      });
    }
  };

</script>

<svelte:head>
  <title>Shopping Cart | Blulux Shop</title>
</svelte:head>

{#if $cart.length}
  <div id="cart">
    <ul>
      {#each $cart as product (product.id)}
        <li class="item">
          <div
            class="product-avatar"
            style={`background-image: url(${
              product.images.length ? product.images[0] : "/art/no_image.svg"
            });`}
          />
          <div class="main-info">
            <h4>{product.name}</h4>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> -->
            <div class="numbers">
              <p class="category">{product.category ? product.category : ""}</p>
              <div class="quantity">
                <button
                  on:click={() =>
                    product.qty == 0
                      ? (product.qty = 0)
                      : (product.qty = product.qty - 1)}>-</button
                >
                <input type="number" min="0" bind:value={product.qty} />
                <button on:click={() => (product.qty = product.qty + 1)}
                  >+</button
                >
              </div>
              <div class="price">£{(product.price / 100).toFixed(2)}</div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
    <div class="total">
      £{($cartTotal / 100).toFixed(2)}
    </div>
    {#if $cartTotal}
      <button class="btn" disabled={!$cartTotal} on:click={createCheckout}
        >checkout now</button
      >
    {:else}
      <a href="/products" class="btn">Go shopping</a>
    {/if}
  </div>
{:else}
  <div class="container">
    <h2>Make your clients happy!</h2>
    <img src="/art/super.svg" alt="Ready to shop" loading="lazy"/>
    <a href="/products" class="btn">Go shopping</a>
  </div>
{/if}

<style>
  .container {
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    padding-bottom: 4rem;
  }

  h2 {
    font-size: 2.8em;
    margin: 3rem 0;
    font-weight: 300;
    z-index: 100;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 200;
  }

  a {
    margin: 3rem 0;
    font-size: 1.2rem;
  }

  #cart {
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 4rem;
  }

  #cart > ul {
    padding-top: 0;
  }

  .item {
    font-size: 1.4rem;
    display: flex;
    gap: 10%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--gray-lighter);
  }

  .product-avatar {
    width: 120px;
    height: 120px;
    background-size: cover;
    background-position: center;
    display: block;
    border-radius: 50%;
  }

  .main-info {
    /* display: flex; */
    flex: 1;
  }

  .main-info > h4 {
    color: var(--secondary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: left;
    font-size: 1.6rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
  }

  .quantity > input {
    max-width: 2.5rem;
    text-align: center;
  }
  .quantity > button {
    padding: 0.3rem;
  }

  .numbers {
    margin-top: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.3rem;
    align-items: center;
  }
  .category {
    color: var(--gray);
    font-size: 1.2rem;
    text-transform: lowercase;
  }

  .total {
    text-align: center;
    font-size: 1.6rem;
  }

  .btn {
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    .category {
      display: none;
    }
  }
</style>
