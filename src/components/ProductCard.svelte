<script>
  import { cart } from "../helpers/store";

  export let product;

  const addToCart = (prod) => {
    let foundP = $cart.find((p) => p.id == prod.price_id);
    if (foundP) {
      // foundP.qty = foundP.qty + prod.quantity;
      foundP.qty = foundP.qty + 1;
      $cart = $cart;
    } else {
      $cart = [
        ...$cart,
        {
          id: prod.price_id,
          // qty: prod.quantity,
          qty: 1,
          name: prod.name,
          images: prod.images,
          price: prod.price,
          category: prod?.metadata?.category,
        },
      ];
    }
    localStorage.setItem("localCart", JSON.stringify($cart));
  };
</script>

<li class="item">
  <div class="image-wrapper">
    <div
      class="product-avatar"
      style={`background-image: url(${
        product.images.length ? product.images[0] : "/art/no_image.svg"
      });`}
    />
  </div>

  <h3 class="product-name">
    {product.name}
  </h3>
  <div class="description"><p>{product?.description || ""}</p></div>
  <div>
    {#if product.active}
      <div class="numbers">
        <p>£{(product.price / 100).toFixed(2)}</p>
      </div>
      <button class="btn" on:click={() => addToCart(product)}
        >Add to cart</button
      >
    {:else}
      <p class="out">Out of stock</p>
    {/if}
  </div>
</li>

<style>
  .item {
    max-width: 420px;
    height:500px;
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-self: center;

  }

  .image-wrapper {
    overflow: hidden;
    height: 280px;
  }

  .product-avatar {
    margin: 0 auto;
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: center;
    display: block;
    transition: all 0.3s ease-in-out;
  }
  .product-avatar:hover {
    z-index: -110;
    -webkit-transform: scale(1.5, 1.5);
    transition: all 0.3s ease-in-out;
    transform: scale(1.5, 1.5);
  }

  .product-name {
    text-align: center;
    margin: 0.5rem 0;
    font-weight: 300;
    color: var(--secondary);
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.6rem;
  }

  .description {
    font-size: 1.2rem;
    color: var(--gray);
    font-weight: 300;
    max-width: 280px;
    /* line-height: 1.2; */
    height: 2.5rem;
    flex: 1;
    padding: 1rem 0;
    text-overflow: ellipsis;
  }

  .out {
    font-size: 1.4rem;
    text-align: center;
    color: var(--gray-light);
    min-width: 240px;
    padding: 1rem;
    background: var(--brand-light);
    justify-self: flex-end;
  }
  .numbers {
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem 0;
  }

  /* .quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */

  .btn {
    width: 100%;
  }

  @media (max-width: 680px) {
    .item {
      border-bottom: 1px solid var(--gray-white);
      padding: 2rem 0;
    }
  }
</style>
