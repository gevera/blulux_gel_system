<script>
  import { cart } from "../helpers/store";
  import { fade, scale } from "svelte/transition";
  export let product;

  let showModal = false;
  let activeImage = "";

  const toggleShowImage = (img_url) => {
    showModal = !showModal;
    if (img_url) {
      activeImage = img_url;
    } else {
      activeImage = "";
    }
  };

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

{#if showModal}
  <div class="modal">
    <div class="modal-overlay" transition:fade />
    <div class="modal-content" transition:scale on:click={toggleShowImage}>
      <img
        src={activeImage}
        alt="Big modal"
        class="modal-picture"
        loading="lazy"
      />
    </div>
  </div>
{/if}

<div class="item">
  <div class="image-wrapper">
    <!-- loading="lazy" -->
    <img
      on:click={() => toggleShowImage(product.images[0])}
      class="product-image"
      src={product.images.length ? product.images[0] : "/art/no_image.svg"}
      alt={product.name}
      loading="lazy"
    />
  </div>

  <h3 class="product-name">
    {product.name}
  </h3>
  <div class="description">
    <p>{product?.description || ""}</p>
  </div>
  <div>
    {#if product?.metadata?.stock == "0"}
      <p class="out">Out of stock</p>
    {:else}
      <div class="numbers">
        <p>£{(product.price / 100).toFixed(2)}</p>
      </div>
      <button class="btn" on:click={() => addToCart(product)}
        >Add to cart</button
      >
    {/if}
  </div>
</div>

<style>
  .item {
    max-width: 280px;
    /* height: 500px; */
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-self: center;
  }

  .image-wrapper {
    overflow: hidden;
    height: 220px;
  }
  .product-image {
    margin: 0 auto;
    height: 220px;
    width: 280px;
    transition: all 0.3s ease-in-out;
    object-fit: cover;
  }

  .product-image:hover {
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
    min-height: 50px;
  }

  .description {
    font-size: 1.2rem;
    color: var(--gray);
    font-weight: 300;
    max-width: 280px;
    /* line-height: 1.2; */
    min-height: 152px;
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

  img:hover {
    cursor: pointer;
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--black);
    opacity: 0.7;
  }

  .modal-content {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    place-items: center;
  }

  .modal-picture {
    height: 80vh;
    width: auto;
    object-fit: cover;
    z-index: 12;
  }

  @media (max-width: 680px) {
    .item {
      border-bottom: 1px solid var(--gray-white);
      padding: 2rem 0;
    }
  }
</style>
