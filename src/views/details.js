import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

// const detailsTemplate = (pet, hasUser, isOwner, onDelete) => html`
// <section id="detailsPage">
//     <div class="details">
//         <div class="animalPic">
//             <img src=${pet.image}>
//         </div>
//         <div>
//             <div class="animalInfo">
//                 <h1>${pet.name}</h1>
//                 <h3>${pet.breed}</h3>
//                 <h4>Age: ${pet.age}</h4>
//                 <h4>Weight: ${pet.weight}</h4>
//                 <h4 class="donation">Donation: 0$</h4>
//             </div>
//             ${hasUser ? html`
//             <div class="actionBtn">
//                 ${isOwner ? html`
//                 <a href="/edit/${pet._id}" class="edit">Edit</a>
//                 <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>` : html`
//                 <a href="#" class="donate">Donate</a>`}                
//             </div>` : nothing}            
//         </div>
//     </div>
// </section>`;

const detailsTemplate = (offer, hasUser, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>
        ${hasUser ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : html`

            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="#" id="apply-btn">Apply</a>`}
        </div>` : nothing }
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id)

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == offer._ownerId;
    ctx.render(detailsTemplate(offer, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?');
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }
}