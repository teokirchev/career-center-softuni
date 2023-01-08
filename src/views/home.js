import { html } from '../lib.js';


// const homeTemplate = () => html`
// <section class="welcome-content">
//     <article class="welcome-content-text">
//         <h1>We Care</h1>
//         <h1 class="bold-welcome">Your Pets</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//     </article>
//     <article class="welcome-content-image">
//         <img src="./images/header-dog.png" alt="dog">
//     </article>
// </section>`;

const homeTemplate = () => html`
<section id="home">
          <img
            src="/images/pngkey.com-hunting-png-6697165-removebg-preview.png"
            alt="home"
          >
          <h2>Searching for a job?</h2>
          <h3>The right place for a new career start!</h3>
        </section>`;

export function showHome(ctx) {
    ctx.render(homeTemplate());
}