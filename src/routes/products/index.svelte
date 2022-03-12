<script>
  import { onMount } from "svelte";

  import {
    categories,
    selectedCategory,
    productList,
    categoriesProd,
  } from "../../helpers/store";
  import ProductCard from "../../components/ProductCard.svelte";
  import Fuse from "fuse.js";
  let fuse;
  let filteredProducts = [];

  // $: console.log("PRODUCT LIST", $productList);
  // console.log("IT IS EMPTY", !$productList.length);

  let searchTerm = "";

  onMount(async () => {
    if (!$productList.length) {
      const res = await fetch(`api/fetch-products`);
      const { data } = await res.json();
      $productList = [...data];
      fuse = new Fuse([...data], {
        includeScore: false,
        keys: ["name", "description", "pirce", "metadata.category", "id"],
      });
    }
  });

  const putInCategories = (c, arr) =>
    arr.filter((p) => {
      if (c != "specials" && p.metadata?.category == c) {
        return p;
      } else if (c == "specials" && !p.metadata.hasOwnProperty("category")) {
        return p;
      }
    });

  const getProdsFromCategory = (catname, arr) =>
    arr.find((c) => c.name == catname)?.products;

  $: if (searchTerm?.length > 0) {
    const searchResult = fuse?.search(searchTerm);
    const result = searchResult?.map((r) => r?.item);
    filteredProducts = $categoriesProd?.reduce((newArr, c) => {
      return result?.length
      ? [
        ...newArr,
        { name: c.name, products: putInCategories(c.name, result) },
      ]
      : [...newArr];
    }, []);
    console.log(searchTerm);
    console.log(searchResult);
    console.log(filteredProducts);
  } else {
    filteredProducts = $categoriesProd?.reverse();
  }
</script>

<svelte:head>
  <title>Products | Blulux Shop</title>
</svelte:head>

<div class="search" id="top">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-search"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    stroke-width="0.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg><input
    type="text"
    placeholder="Product search"
    aria-label="Product Search"
    bind:value={searchTerm}
  />
</div>
<ul class="categories">
  {#if $categories.length}
    {#each $categories as category, i (i)}
      <li on:click={() => ($selectedCategory = category)}>
        <a rel="prefetch" href={`/products#${category.split(" ").join("")}`}
          >{category}</a
        >
      </li>
    {/each}
  {/if}
</ul>

<ul class="container">
  {#each $categories as category, i (i)}
    {#if getProdsFromCategory(category, filteredProducts)?.length}
      <div id={category.split(" ").join("")} class="category">
        <li>
          <h2 class="category-name">{category}</h2>
          <ul class="items">
            {#each getProdsFromCategory(category, filteredProducts) as product, i (i)}
              <ProductCard {product} />
            {/each}
          </ul>
        </li>
      </div>
    {/if}
  {/each}
</ul>

<!-- <pre>{JSON.stringify($categoriesProd, null, 2)}</pre> -->

<!-- <pre>{JSON.stringify($productList, null, 2)}</pre> -->
<style>
  #top {
    padding-top: 4rem;
    margin-top: -4rem;
  }
  .search {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search > input {
    max-width: 200px;
    color: var(--gray);
    font-weight: 300;
  }

  .categories {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 1rem;
    margin: 0 auto;
    overflow-x: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .categories > li > a {
    color: var(--gray-light);
    padding-bottom: 0.2rem;
    white-space: nowrap;
  }
  .container {
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 1024px;
  }

  .category {
    border-bottom: 1px solid var(--gray-lighter);
    margin-bottom: 1rem;
    padding-top: 4rem;
    margin-top: -4rem;
  }
  .category-name {
    padding-top: 1rem;
    font-size: 2.4rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    color: var(--brand-dark);
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .items {
    margin: 0 auto;
    padding: 1rem;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.6rem;
  }

  @media (min-width: 480px) {
    .categories {
      justify-content: center;
    }
  }
</style>
