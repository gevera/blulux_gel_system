<script context="module">
  import { productList } from "../helpers/store";
  export async function preload(page, session) {
    const res = await this.fetch(`/api/fetch-products`);
    const { data } = await res.json();
    productList.set(data);
  }
</script>

<svelte:head>
  <title>Homepage | Blulux Shop</title>
</svelte:head>

<script>
  import Hero from "../components/Hero.svelte";
  import Best from "../components/Best.svelte";
  import Why from "../components/Why.svelte";
  import About from "../components/About.svelte";
  import Categories from "../components/Categories.svelte";
  import New from "../components/New.svelte";
</script>

<Hero />
<Why />
<Best />
<Categories />
<About />
<New />
