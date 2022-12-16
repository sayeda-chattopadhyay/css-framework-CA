import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

const id = params.get("id");
const name = params.get("name");

console.log(name);

console.log(id);

const action = "/posts";

export async function getPost(id) {
  if (!id) {
    throw new Error("Required a postID");
  }
  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  console.log(getPostUrl);

  const token = load("token");

  console.log(token);

  const response = await fetch(getPostUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // if (response.ok) {
  //   return await response.json();
  // }

  const postDetails = await response.json();

  console.log("postDetails", postDetails);

  // specificPostContainer.innerHTML = "";

  createHTML(postDetails);
  // addModalFunction();

  // specificPostContainer.innerHTML = errorMessage("Something goes wrong");
}

getPost(id);

// ///////////

///////Single post Url////

//**********************//

function createHTML(details) {
  const specificPostContainer = document.getElementById("specificPost");

  specificPostContainer.innerHTML += ` <div class="card" style="width: 18rem;">
                                            <div class="">
                                                <img src="${details.media}" class="card-img-top img-thumbnail style="width: 18rem;height : 18rem;" alt="${details.title}"/>
                                            </div>
                                            <div class="card-body">
                                                <h2 class="card-title">${details.title}</h2>
                                                <p class="card-text">${details.body}</p>
                                                <p class="card-text">By ${details.created}</p>

                                            </div>
                                        </div>`;
}

//*************************************

// `
// <div class="d-flex justify-content-center border border-primary my-4 ">
// <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="card" style="width: 18rem;">
//                                         <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem;height : 18rem;" alt="${post.title}"/ >
//                                         <div class="card-body">
//                                           <h2 class="card-title">${post.title}</h2>
//                                           <p class="card-text">${post.body}</p>
//                                           <p>By ${post.author}</p>
//                                           <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>
//                                         </div>
// </a>
// </div>`

// <div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>

// export async function getPosts() {
//   const getPostUrl = API_SOCIAL_URL + action;
//   try {
//     console.log(getPostUrl);
//     const token = load("token");
//     console.log(token);

//     const response = await fetch(getPostUrl, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       //   method: "GET",
//       //   body: JSON.stringify(postData),
//     });

//     console.log(response);
//     const posts = await response.json();

//     createPostsHTML(posts);

//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPosts(); */

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }

// <p class="card-text">By ${details.author}</p>
