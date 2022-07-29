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

<svelte:head>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N6CWT8Q');</script>
  <!-- End Google Tag Manager -->
</svelte:head>

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
