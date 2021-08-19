<script>
  import { productList } from "../helpers/store";
  import ProductCard from "./ProductCard.svelte";

  let specialProducts = [];
  $: specialProducts = $productList.filter(
    (p) => p?.metadata?.frontpage == "best seller"
  );
</script>

{#if specialProducts.length > 0}
  <div id="best-sellers">
    <h2>Our Best Sellers</h2>

    <!-- <pre>{JSON.stringify(specialProducts, null, 2)}</pre> -->
    <ul class="swiper">
      {#each specialProducts as product (product.id)}
        <li class="wd">
          <ProductCard {product} />
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  #best-sellers {
    margin: 1.5rem;
    font-size: 1.6rem;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }

  h2 {
    padding: 1.6rem;
    border-top: 1px solid var(--gray-lighter);
    font-weight: 300;
    text-align: center;
    font-size: 1.8rem;
  }

  .wd {
    min-width: 280px;
  }

  .swiper {
    display: flex;
    gap: 1.6rem;
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  @media (min-width: 620px) {
    .swiper {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
