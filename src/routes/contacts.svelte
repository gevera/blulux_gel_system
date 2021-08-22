<script>
  import { fade, scale } from "svelte/transition";
  import Sharedpage from "../components/Sharedpage.svelte";
  let f = {};
  let openModal = false;

  const closeMadal = () => {
    f = {};
    openModal = false;
  };
  const sendForm = async () => {
    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: f.name,
        telephone: f.telephone,
        message: `From <b>${f.email}</b>, ${f.message}`,
      }),
    });
    const data = await res.json();
    if (data.success) {
      openModal = true;
    }
  };
</script>

<svelte:head>
  <title>Contact us | Blulux Shop</title>
</svelte:head>

{#if openModal}
  <div class="modal">
    <div class="overlay" transition:fade/>
    <div class="modal-base" on:click={closeMadal}>
      <div class="modal-content" transition:scale>
        <!-- <button on:click={closeMadal}>X</button> -->
        <button on:click={closeMadal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#141414"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h3>Thank You!</h3>
        <p>You message has been successfully sent</p>
        <img src="/art/message.svg" alt="Message sent" />
        <p>We will get back to you shortly</p>
      </div>
    </div>
  </div>
{/if}

<Sharedpage coverName="Contact us" coverImage="/pics/contacts_2.jpg">
  <div class="container">
    <div class="flx">
      <div class="info">
        <p>
          If you have questions about your order, our products or anything
          else, shoot us an <a href="mailto:bluluxgelsystem@gmail.com">email</a>
          Or you can let us know how we can help you by completing the form.
        </p>
      </div>
      <form on:submit|preventDefault={sendForm}>
        <input type="text" placeholder="Name" required bind:value={f.name} />
        <input type="tel" placeholder="Telephone" bind:value={f.telephone} />
        <input
          type="email"
          placeholder="E-mail"
          required
          bind:value={f.email}
        />
        <textarea
          placeholder="Message"
          required
          rows="7"
          bind:value={f.message}
        />
        <button class="btn">Send</button>
      </form>
    </div>
  </div>
</Sharedpage>

<style>
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 1rem;
    /* box-shadow: 0 6px 17px 0 rgba(0, 0, 0, 0.08); */
    border-radius: 7px;
    /* background: var(--gray-white); */
    margin-bottom: 3rem;
  }

  p {
    max-width: 300px;
    line-height: 1.5;
    text-align: right;
    font-size: 1.6rem;
  }

  .flx {
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  input,
  textarea {
    padding: 1rem;
    border-bottom: 1px solid var(--gray-lighter);
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .btn {
    margin: 1rem 0;
  }

  p > a {
    color: var(--brand-dark);
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--black);
    opacity: 0.7;
    z-index: 10;
  }

  
  .modal-base {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    place-items: center;
    z-index: 11;
  }

  .modal-base:hover {
    cursor: pointer;
  }

  .modal-content {
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    min-width: 250px;
    margin: 1rem;
    padding: 1rem;
    background: #fff;
    max-width: 640px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
  }

  .modal-content > button {
    align-self: flex-end;
  }

  .modal-content > h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    z-index: 100;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
  }

  .modal-content > p {
    text-align: center;
    align-self: center;
    line-height: 1;
  }
  .modal-content > img {
    max-width: 220px;
    margin: 0 auto;
  }

  @media (max-width: 642px) {
    p {
      margin: 0 auto;
      text-align: center;
      max-width: 80%;
      font-size: 1.4rem;
    }
  }
</style>
