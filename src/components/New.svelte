<script>
  import { productList } from "../helpers/store";
  import ProductCard from "./ProductCard.svelte";
  let newProducts = $productList.slice(0, 4);
</script>

<div class="main-container">
  <h2>New Arrivals</h2>
  <div class="container">
    <ul>
      {#each newProducts as product}
        <ProductCard {product} />
      {/each}
    </ul>
  </div>
  <a href="/products" class="btn">All products</a>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
    padding: 1rem;
  }

  .container > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: center;
  }
  h2 {
    padding: 1.6rem;
    margin-top: 2rem;
    border-top: 1px solid var(--gray-lighter);
    font-weight: 300;
    text-align: center;
    font-size: 1.8rem;
  }

  .btn {
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
</style>
