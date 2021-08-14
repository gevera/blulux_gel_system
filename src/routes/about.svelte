<script>
  import Sharedpage from "../components/Sharedpage.svelte";
</script>

<svelte:head>
  <title>About us | Blulux Shop</title>
</svelte:head>

<Sharedpage coverName="About us" coverImage="/pics/about_1.jpg">
  <div class="container">
    <div class="ms">Our mission statement</div>
    <h3 class="mw">
      ” To be UK’s leading authority among both professional nail technicians and
      their clients. To meet customers’ needs for superior quality products and
      innovative knowledge in the nail industry. ”
    </h3>
    <div class="gemini">
      <div class="img" />

      <div>
        <p>
          Based in United Kingdom Blulux Gel System is a brand that provides
          ideal gels and tools for nail therapists that makes their job a joy.
        </p>
        <p>
          Premium quality products were created with all modern criteria and
          requirements taken into account. Blulux Gel System is a professional
          range of gel products, hard-wearing and easy to use, come completely
          safety assured and offers a cruelty free and vegan solution for a
          perfect look.
        </p>
      </div>
    </div>

    <p class="mw ingridients">
      One of the main goals of the brand is to reduce allergies, thus creating
      the HEMA FREE, HPMA FREE, 10 FREE formula. According to BOD (British
      Association of Dermatologists ), HEMA and HPMA are first allergen
      ingredients in nail products. Commonly known as hydroxyethyl methacrylate
      and hydroxypropyl methacrylate are monomers used in nail products for
      adhesion, dilution and polymerization of UV gels. The concentration over
      35% may cause dermatitis allergies and chemical burns. Blulux gels are
      absent of 10 toxic ingredients: Formaldehyde, Toluene, DBP, Camphor,
      Formaldehyde resin, Xylene, Parabens, Fragrances, Phthalates, Animal
      ingredients.
    </p>

    <h4 class="ms">Our core values</h4>

    <ul class="mw">
      <li>
        <h5>Trading ethically</h5>
        <p>
          Blulux believes in maintaining ethics while trading with
          different suppliers, dealers, vendors, and even other partner
          companies. They want to establish trade relationships based on morals,
          ethics, trust, and credibility.
        </p>
      </li>

      <li>
        <h5>Banning animal testing</h5>
        <p>
          No matter what kind of product the company is developing, it considers
          animal testing as a cruel act against humanity’s values and
          principles. This is why the experts at Blulux Gel System test their
          products in different ways without harming anyone, mainly the animals.
        </p>
      </li>

      <li>
        <h5>Saving the planet Earth</h5>
        <p>
          Blulux aims at saving the planet Earth, and we have adopted different
          techniques to ensure that no harm is done to nature. Blulux has
          established a business chain to create a beautiful world where one can
          connect oneself with nature and revel in this magnificent bond.
        </p>
      </li>
    </ul>
  </div>
</Sharedpage>

<style>
  .mw {
    max-width: 968px;
    padding: 1rem;
    margin: 0 auto;
  }
  .container {
    line-height: 1.5;
    font-size: 1.4rem;
  }

  .ms {
    text-align: center;
    color: var(--gray);
    letter-spacing: 0.2rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 1.5rem 0;
    line-height: 1.5;
    font-size: 1.6;
    font-weight: 300;
  }

  .gemini {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--brand-light);
    gap: 1rem;
    align-items: center;
    margin: 3rem 0;
    min-height: 30vh;
  }

  .gemini > .img {
    background: url("/pics/about_3.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
  }
  .gemini > div {
    font-size: 1.8rem;
  }

  .gemini > div > p {
    padding: 1rem;
  }

  .ingridients {
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }

  ul > li > h5 {
    font-size: 2rem;
    padding-left: 2rem;
    border-left: 4px solid var(--brand-light);
  }

  @media (max-width: 768px) {

    h3 {
      font-size: 1.8rem;
      text-align: center;
    }
    .gemini {
      grid-template-columns: 1fr;
    }

    .gemini > .img {
      height: 80vh;
    }

    .gemini > div > p {
      text-align: center;
      font-size: 1.6rem;
    }

    p, .ingridients {
      font-size: 1.4rem;
    }

    .ms { 
      letter-spacing: 0.1rem;
    }
  }
</style>
