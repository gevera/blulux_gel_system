<script context="module">
  export async function preload(page) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { session_id } = page.query;
    // console.log("SESSION ID", session_id);
    if (session_id) {
      const res = await this.fetch(`/api/session-success`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id }),
      });
      const { session } = await res.json();

      return { data: session };
    } else {
      return this.redirect(302, "/");
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { cart } from "../helpers/store";

  export let data;
  // ?session_id=cs_test_b1uvAz9Dfo17JIpFKFyFfsDaImQqaSWS8Tdg0F7ddteG0j7NBtJxJIoMyY
  onMount(async () => {
    localStorage.setItem("localCart", JSON.stringify([]));
    $cart = [];
  });
  // $: console.log($page.query);

  // $: console.log(data);
</script>

<svelte:head>
  <title>Order confirmed | Blulux Shop</title>
</svelte:head>

{#if data}
  <div class="container">
    <h2>Awesome!</h2>
    <p>Your orderd has been placed</p>
    <img src="/art/success.svg" alt="Success page" loading="lazy" />
    <div class="flx">
      <p>Thank you for purchasing <a href="/#start">Blulux</a> products!</p>

      <p>
        We will be sending the items shortly to <a
          href={`https://en.wikipedia.org/wiki/${data?.shipping?.address?.city}`}
          target="_blank">{data?.shipping?.address?.city}</a
        >
      </p>

      <p>
        If you have any questions, <a href="/contacts">get in touch</a> with us
      </p>
    </div>
    
    <p>Your confirmation order number is</p>
    <h3>{data?.payment_intent.slice(-7)}</h3>
    <a href="/products" class="btn">Go back shopping</a>
  </div>
  <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
{/if}

<style>
  .container {
    color: var(--gray-dark);
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }

  h2 {
    font-size: 2.4em;
    margin-top: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    z-index: 100;
    font-family: --system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
  }

  h3 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
  }

  .btn {
    margin: 3rem 0;
    font-size: 1.2rem;
  }

  p {
    color: var(--gray);
    margin: 1.5rem 0;
    font-size: 1.6rem;
    font-weight: 100;
  }

  p > a {
    text-transform: uppercase;
    color: var(--brand-dark);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: 0.2rem;
  }

  .flx > p {
    padding-top: 1rem;
    max-width: 300px;
  }

  .flx {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 3em;
    }
  }
</style>
