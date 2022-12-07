import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";
const specificPostContainer = document.getElementById("specificPost");

const querryString = document.location.search;

const params = new URLSearchParams(querryString);

const id = params.get("id");

console.log(id);

const action = "/posts";

export async function getPost(id) {
  try {
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
      //   method: "GET",
      //   body: JSON.stringify(postData),
    });

    const postDetails = await response.json();

    console.log(postDetails);

    // specificPostContainer.innerHTML = "";

    // createHTML(postDetails);
    // addModalFunction();
  } catch (error) {
    console.log(error);
    // specificPostContainer.innerHTML = errorMessage("Something goes wrong");
  }
}

getPost(id);

function createHTML(details) {
  specificPostContainer.innerHTML += ` <div class="details-card">
                                    <div class="details-card-image"><img src="${details.jetpack_featured_media_url}" alt= "${details.title.rendered}" class="specific-image"></div>
                                    <div class= "details-card-text">
                                        <h1>${details.title.rendered}</h1>
                                        <p class="blog-date">Published: ${details.date}</p>  
                                        <p>${details.content.rendered}</p> 
                                    </div>    
                                  </div>`;
}

//**********************

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
