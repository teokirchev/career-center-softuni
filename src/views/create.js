import { createOffer } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js'

// const createTemplate = (onCreate) => html`
// <section id="createPage">
//     <form @submit=${onCreate} class="createForm">
//         <img src="./images/cat-create.jpg">
//         <div>
//             <h2>Create PetPal</h2>
//             <div class="name">
//                 <label for="name">Name:</label>
//                 <input name="name" id="name" type="text" placeholder="Max">
//             </div>
//             <div class="breed">
//                 <label for="breed">Breed:</label>
//                 <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
//             </div>
//             <div class="Age">
//                 <label for="age">Age:</label>
//                 <input name="age" id="age" type="text" placeholder="2 years">
//             </div>
//             <div class="weight">
//                 <label for="weight">Weight:</label>
//                 <input name="weight" id="weight" type="text" placeholder="5kg">
//             </div>
//             <div class="image">
//                 <label for="image">Image:</label>
//                 <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
//             </div>
//             <button class="btn" type="submit">Create Pet</button>
//         </div>
//     </form>
// </section>`;

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)))

    async function onCreate({ title, imageUrl, category, description, requirements, salary }) {
        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            return alert('All fields are required!')
        }
        await createOffer({
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary
        });
        ctx.page.redirect('/catalog');
    }
}