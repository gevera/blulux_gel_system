<script>
  import { onMount } from "svelte";

  import {
    categories,
    selectedCategory,
    productList,
    categoriesProd,
  } from "../../helpers/store";
  import ProductCard from "../../components/ProductCard.svelte";
  let filteredProducts = [];

  // console.log("PRODUCT LIST", $productList);
  // console.log("IT IS EMPTY", !$productList.length);

  let searchTerm = "";

  onMount(async () => {
    if (!$productList.length) {
      const res = await fetch(`api/fetch-products`);
      const { data } = await res.json();
      $productList = [...data];
    }
  });

  $: if (searchTerm.length > 0) {
    filteredProducts = $categoriesProd.reduce((newArr, c) => {
      let filtCategory = c.products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filtCategory.length
        ? [...newArr, { name: c.name, products: filtCategory }]
        : [...newArr];
    }, []);
  } else {
    filteredProducts = $categoriesProd;
  }

  // $: console.log(filteredProducts);
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
    bind:value={searchTerm}
  />
</div>
<ul class="categories">
  {#if $categories.length}
    {#each $categories as category}
      <li on:click={() => ($selectedCategory = category)}>
        <a rel="prefetch" href={`/products#${category.split(" ").join("")}`}>{category}</a>
      </li>
    {/each}
  {/if}
</ul>

<ul class="container">
  {#each filteredProducts.reverse() as category (category.name)}
    <div id={category.name.split(" ").join("")} class="category">
      <li>
        <h2 class="category-name">{category.name}</h2>
        <ul class="items">
          {#each category.products as product (product.id)}
            <ProductCard {product} />
          {/each}
        </ul>
      </li>
    </div>
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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
