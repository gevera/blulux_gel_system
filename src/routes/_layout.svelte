<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";

  import Nav from "../components/Nav.svelte";
  import { cart, shippingCountry } from "../helpers/store";
  export let segment;
  onMount(async () => {
    const localCart = localStorage.getItem("localCart");
    if (localCart) {
      $cart = [...JSON.parse(localCart)];
    } else {
      localStorage.setItem("localCart", JSON.stringify([]));
    }

    if (!$shippingCountry) {
      const res = await fetch(`https://ipinfo.io/json`);
      if (res?.ok) {
        const data = await res.json();
        $shippingCountry = data.country;
      }
    }
  });
</script>

<div id="shop">
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  #shop {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  main {
    overflow-x: hidden;
  }
</style>
