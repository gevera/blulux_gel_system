<script>
  export let coverImage = "/pics/about_1.jpg";
  export let coverName = "Beauty in details";
</script>

<div class="container">
  <div class="img-container">
    <div class="main-message">
      <h2>{coverName}</h2>
    </div>
    <div class="cover" style={`background-image: url(${coverImage});`} />
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .main-message > h2 {
    text-align: center;
    position: absolute;
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
    z-index: 1;
    color: var(--brand-light);
    font-size: 3rem;
    letter-spacing: 0.2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .img-container {
    height: 45vh;
    width: 100%;
    position: relative;
    margin-bottom: 3rem;
  }
  .cover {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: block;
    z-index: 1;
  }
  /* .content {
    padding: 2rem 1rem;
  } */
</style>
