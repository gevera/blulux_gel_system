<script>
  import {
    totalCartItems,
    showMenu,
  } from "../helpers/store";
  import Menu from "./Menu.svelte";

  // export let segment;

  const toggleMenu = () => {
    $showMenu = !$showMenu;
  };

</script>

{#if $showMenu}
  <Menu />
{/if}

<nav>
  <button id="menu" on:click={toggleMenu}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-align-left"
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
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="14" y2="12" />
      <line x1="4" y1="18" x2="18" y2="18" />
    </svg>
  </button>
  <a rel="prefetch" href="/#start" id="home">
    <img src="blulux-logo.png" alt="Blulux Logo" />
  </a>
  <a href="/cart" id="cart">
    <div class="flx">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-shopping-cart"
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
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      {#if $totalCartItems}
        <div>{$totalCartItems}</div>
      {/if}
    </div>
  </a>
  <div id="blur" />
</nav>

<style>
  nav {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: flex-start;
    /* padding: 0.1rem;  */
    gap: 0.3rem;
    top: 0;
    position: sticky;
    z-index: 10;
    /* background: var(--gray-white); */
  }

  #blur {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.2rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.85);
    z-index: 2;
    -webkit-filter: blur(32px);
    -moz-filter: blur(32px);
    -o-filter: blur(32px);
    -ms-filter: blur(32px);
    filter: blur(32px);
  }

  #menu {
    justify-self: left;
    z-index: 11;
  }

  #home {
    margin: 0 auto;
    padding-top: 0.3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 130px));
    place-items: center;
    text-align: center;
    z-index: 11;
  }

  #cart {
    /* display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.1rem; */
    text-align: right;
    padding: 0.5rem 1rem;
    z-index: 11;
  }

  #cart:hover,
  #menu:hover {
    color: var(--brand-dark);
  }
  #cart > div {
    /* padding: 0.5rem 1rem; */
    font-size: 1.2rem;
    z-index: 11;
  }
  .flx {
    justify-content: flex-end;
    z-index: 11;
  }
</style>
