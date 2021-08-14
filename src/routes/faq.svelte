<script>
  import Sharedpage from "../components/Sharedpage.svelte";
</script>

<svelte:head>
  <title>Frequently Asked Questions | Blulux Shop</title>
</svelte:head>

<Sharedpage coverName="FAQ" coverImage="/pics/faq.jpg">
  <div class="container">
    <h2>Shipping</h2>

    <ul>
      <li>Where does Blulux ship?</li>

      <li>How much does shipping cost?</li>

      <li>When can I expect to receive my order?</li>

      <li>How can I expedite my order?</li>

      <li>Do you ship to P.O. Boxes?</li>

      <li>How can I change my shipping address?</li>

      <li>
        Do you ship paint during seasons or weather with extreme (hot or cold)
        temperatures?
      </li>

      <li>How can I leave specific delivery instructions for FedEx?</li>
    </ul>

    <h2>Orders</h2>

    <ul>
      <li>How can I sample your paint colors?</li>

      <li>How much paint do I need to order?</li>

      <li>How do I check the status of my order?</li>

      <li>Can I change or cancel my order?</li>
    </ul>

    <h2>Returns</h2>
    <ul>
      <li>What is your return policy?</li>

      <li>How do I start a return or exchange?</li>
    </ul>

    <h2>Billing</h2>

    <ul>
      <li>When will my credit card be charged?</li>

      <li>Why am I charged an extra fee for PaintCare?</li>

      <li>What forms of payment do you accept?</li>

      <li>What can I do if my payment is declined?</li>

      <li>Do you offer an installment plan for your paint?</li>
    </ul>

    <h2>Warranty</h2>

    <ul>
      <li>Does your paint have a warranty?</li>

      <li>What about your warranty on supplies?</li>
    </ul>

    <h2>Customer Support</h2>

    <ul>
      <li>How can I contact Clare customer support?</li>

      <li>Can you remove my data from your system?</li>
    </ul>

    <h2>Product Information</h2>

    <ul>
      <li>Do I need to use primer with your paints?</li>

      <li>Do you sell sizes smaller than a gallon?</li>

      <li>Do you have a color fan deck?</li>

      <li>Who manufactures your products?</li>

      <li>Can I use your paint on my furniture?</li>

      <li>Can I use your paint on the exterior of my home?</li>

      <li>Can your paint be used in a sprayer?</li>

      <li>Can I use your Wall Paint on my ceiling?</li>

      <li>Can I use your Trim Paint on my walls?</li>

      <li>Zero VOC - what does that even mean?</li>

      <li>What are the VOC contents of your paint?</li>

      <li>Are your colorants also Zero VOC?</li>

      <li>Your paint is GREENGUARD Gold Certified. What does that mean?</li>

      <li>What are the ingredients in your paint?</li>

      <li>What is the shelf life of your paint?</li>

      <li>Are your paints mildew resistant?</li>
    </ul>
    <h2>Product Maintenance</h2>
    <ul>

      <li>How do I remove the metal clips from the paint can lid?</li>
      
    <li>What's the proper way to re-seal my paint can lid?</li>

    <li>How do I store my leftover paint?</li>
    
    <li>Can I recycle my leftover paint?</li>
    
    <li>How do I safely dispose of my leftover paint?</li>
    
    <li>What do I do if my paint has frozen?</li>
       
  </ul>
    <h2>Press</h2>

    <ul>
      <li>I’m a member of the media - where can I send a press inquiry?</li>
    </ul>
    <h2>Influencers</h2>

    <ul>
      <li>I'm an influencer - where can I submit an inquiry?</li>
    </ul>
  </div>
</Sharedpage>

<style>
  .container {
    max-width: 1024px;
    margin: 0 auto;
    font-size: 1.6rem;
    padding: 1rem;
    padding-bottom: 3rem;
  }
  h2 {
    font-size: 2rem;
    padding-left: 2rem;
    border-left: 4px solid var(--brand);
    margin: 2rem 0;
  }

  ul {
    margin: 1rem 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      
  }

  ul > li {
    font-weight: 200;
  }
</style>
