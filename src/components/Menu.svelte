<script>
  import { fade, scale } from "svelte/transition";
  import { showMenu } from "../helpers/store";
  import Social from "./Social.svelte";
</script>

<div class="menu-modal">
  <div class="overlay" transition:fade />
  <div class="menu-content" transition:scale>
    <header>
      <ul on:click={() => ($showMenu = false)} class="menu">
        <li><a href="/#start">Main Page</a></li>
        <li><a href="/products#top">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contacts">Contact Us</a></li>
      </ul>
      <Social />
    </header>
  </div>
</div>

<style>
  .menu-modal {
    position: absolute;
    height: 90vh;
    width: 100%;
  }
  .overlay {
    position: fixed;
    top: 3.2rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--black);
    opacity: 0.5;
    padding: 1rem;
  }

  .menu-content {
    position: fixed;
    padding: 1rem;
    background: #fff;
    top: 3.2rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  header {
    height: 80vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .menu > li > a {
    font-size: 2rem;
  }

  .menu > li > a:hover {
    color: var(--brand-dark);
  }
</style>
