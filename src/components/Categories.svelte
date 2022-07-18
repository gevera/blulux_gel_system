<script>
  import { categories, selectedCategory } from "../helpers/store";

  const catgs = [
    {
      name: "bases & tops",
      pic: "/pics/tops_1.jpg",
      description:
        "Blulux base and top is a professional range of long-wearing and perfect shine gel products, with ideal consistency that allows an easy completion of the perfect manicure.",
    },
    {
      name: "cover bases",
      pic: "/pics/nails_1.jpg",
      description:
        "A range of Blulux multifunctional rubber cover bases. It is a high quality coverege gel product with medium viscosity, provides an easy solution for a nude or french manicure.",
    },
    {
      name: "builders",
      pic: "/pics/about_3.jpg",
      description:
        "Blulux camuflage builder hard gels with unique formulation that allows a long lasting nail enhanchement, gel overlay, gel strengthening. They are LED or UV curable, self-leveling and medium-thick viscosity.",
    },
    {
      name: "acrygels",
      pic: "/pics/cover_bases.jpg",
      description:
        "A true hybrid between hard gel system and acrylic system. AcryGels are more flexible than acrylic and stronger than hard gels. They are perfect for long, short nail enhancement, overlay and strengthening. Avalable in 8 shades.",
    },
    // {
    //   name: "gel polishers",
    //   pic: "/pics/cover_bases.jpg",
    //   description:
    //     "A true hybrid between hard gel system and acrylic system. AcryGels are more flexible than acrylic and stronger than hard gels. They are perfect for long, short nail enhancement, overlay and strengthening. Avalable in 8 shades.",
    // },
    {
      name: "tools",
      pic: "/pics/tools.jpg",
      description:
        "Best-in-class instruments are simple and multifunctional in use. Carbide Cutters feature fast performance, lower heating and almost no dust while Diamond Burs are used for work with soft tissues – end of nail plate as well as cuticle removal.",
    },
    {
      name: "specials",
      pic: "/pics/about_4.jpg",
      description:
        "Our special gels and tools.",
    },
  ];

  const getCat = (cat) => catgs.filter((c) => c.name == cat)[0];
</script>

<div id="categories">
  <h2>Categories</h2>
  <ul class="col">
    <!-- <li><input type="text" placeholder="search" /></li> -->
    {#if $categories.length}
      {#each $categories as category, i (i)}
        <li on:click={() => ($selectedCategory = category)}>
          <a
            rel="prefetch"
            href={`/products#${category.split(" ").join("")}`}
            class="categ"
            class:rev={i % 2}
          >
            <img src={getCat(category)?.pic ||'/pics/about_1.jpg'} alt="" class="img" loading="lazy" />

            <div class="content">
              <h3>
                {category}
              </h3>
              <p>
                {getCat(category)?.description || 'No words on earth can describe this. You have to try it!'}
              </p>
            </div>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style>
  li,
  a {
    margin: 0;
    padding: 0;
    /* display: inline-block; */
    text-align: center;
  }
  #categories {
    margin: 1.5rem;
    font-size: 1.6rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    padding: 1.6rem;
    border-top: 1px solid var(--gray-lighter);
    font-weight: 300;
    text-align: center;
    font-size: 1.8rem;
  }

  .categ {
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: var(--brand-light);
    align-items: center;
    min-height: 30vh;
  }

  .categ:hover {
    color: var(--brand-darker);
    background: var(--brand);
  }

  .rev {
    flex-direction: row-reverse;
  }

  .categ > img {
    margin: 0;
    padding: 0;
    height: 30vh;
    width: 100%;
    object-fit: cover;
    flex: 1;
  }

  .categ > .content {
    flex: 1;
  }

  .content > h3 {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    padding-top: 1.6rem;
  }

  .content > p {
    padding: 1.6rem;
  }

  @media (max-width: 756px) {
    .categ {
      flex-direction: column;
    }

    .categ > img {
      height: 30vh;
      flex: none;
    }
  }
</style>
