<script>
  import Social from "./Social.svelte";
</script>

<footer>
  <div class="max-wdth">
    <ul id="links">
      <li><a href="/#start">Home</a></li>
      <li><a href="/products#top">Products</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms-conditions">Terms & Conditions</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
    <div id="logo">
      <a href="/#start">
        <img src="blulux-logo.png" alt="Blulux Logo" loading="lazy" />
      </a>
    </div>
    <Social />
    <div class="hema-free">
      <img src="/hema_free.svg" alt="Hema Free" />
    </div>
    <p>All rights reserved | {new Date().getFullYear()}</p>
    <p id="made">
      Made with <a
        href="https://sapper.svelte.dev/"
        rel="noreferrer"
        target="_blank">Sapper</a
      >,
      <a href="https://stripe.com" rel="noreferrer" target="_blank">Stripe</a>
      & <span class="heart">♥</span> by
      <a href="https://skryonline.com" rel="noreferrer" target="_blank"
        >SKRY | Online</a
      >
    </p>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--brand);
    padding: 1rem;
    font-size: 1.2rem;
    background: var(--brand-light);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  p {
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  a {
    padding: 0.6rem;
  }

  a:hover {
    color: var(--brand-dark);
  }

  img {
    margin-top: 1rem;
    max-width: 260px;
  }

  .hema-free {
    margin: 0 auto;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

  #logo {
    text-align: center;
  }

  /* #links > li  {
    border-right: 1px solid var(--black);
  } */

  #made,
  #made > a {
    color: var(--gray-darker);
    font-size: 1rem;
  }

  p > span {
    font-size: 1.6rem;
  }

  .heart {
    padding-left: 3px;
    padding-right: 3px;
    font-size: 1.4rem;
  }
</style>
