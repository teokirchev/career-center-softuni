import { getAll } from '../api/data.js';
import { html } from '../lib.js';

// const catalogTemplate = (pets) => html`
// <section id="dashboard">
//     <h2 class="dashboard-title">Services for every animal</h2>
//     <div class="animals-dashboard">
//         ${pets.length == 0 ? html`<div>
//             <p class="no-pets">No pets in dashboard</p>
//         </div>` : pets.map(petCardTemplate)}
//     </div>
// </section>`;

// const petCardTemplate = (pet) => html`
// <div class="animals-board">
//     <article class="service-img">
//         <img class="animal-image-cover" src=${pet.image}>
//     </article>
//     <h2 class="name">${pet.name}</h2>
//     <h3 class="breed">${pet.breed}</h3>
//     <div class="action">
//         <a class="btn" href="/catalog/${pet._id}">Details</a>
//     </div>
// </div>`;

const catalogTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    <!-- Display a div with information about every post (if any)-->
    ${offers.length == 0 ? html`
    <!-- Display an h2 if there are no posts -->
    <h2>No offers yet.</h2>` : offers.map(offerCardTemplate)}
</section>`;

// <!-- Display a div with information about every post (if any)-->
const offerCardTemplate = (offer) => html`
<div class="offer">
        <img src=${offer.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${offer.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
        <a class="details-btn" href="/catalog/${offer._id}">Details</a>
    </div>`;

export async function showCatalog(ctx) {
const offers = await getAll()
ctx.render(catalogTemplate(offers));
}