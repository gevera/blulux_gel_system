<svelte:head>
  <title>Order canceled | Blulux Shop</title>
</svelte:head>

<div class="container">
  <h2>Your order has been canceled</h2>
  <img src="/art/cancel.svg" alt="Order canceled page" loading="lazy" />
  <a href="/products" class="btn">Go back shopping</a>
</div>

<style>
  .container {
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }

  h2 {
    font-size: 2.8em;
    margin: 3rem 0;
    font-weight: 300;
    z-index: 100;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
  }

  a {
    margin: 3rem 0;
    font-size: 1.2rem;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 3em;
    }
  }
</style>
