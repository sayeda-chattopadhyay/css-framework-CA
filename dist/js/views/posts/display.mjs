// import { getPosts } from "../../api/posts/read.mjs";

// export function createPostsHTML(posts) {
//   const postCardsContainer = document.getElementById("postCardsContainer");
//   posts.forEach(function (post) {
//     console.log(post);
//     postCardsContainer.innerHTML += `
//       <div class="d-flex justify-content-center border border-primary my-4 ">
//       <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="card" style="width: 18rem;">
//                                               <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
//                                               <div class="card-body">
//                                                 <h2 class="card-title">${post.title}</h2>
//                                                 <p class="card-text">${post.body}</p>
//                                                 <p>By ${post.author.name}</p>
//                                                 <p>Date: ${post.created}</p>
//                                                 <p>comment:${post.comments}</p>
//                                                 <p>reactions:${post.reaction}</p>
//                                                 <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>
//                                               </div>
//    </a>
//    </div>`;
//   });
// }

// createPostsHTML(posts);

// getPosts();

//******************************* */

import * as api from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
//import * as ui from "../../ui/index.mjs";

export async function displayAllPosts() {
  try {
    templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists");
    const posts = await api.getPosts();
    templates.createPostsHTML(posts);
  } catch (error) {
    templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error)
  }
}

export async function displaySearchedPosts(tag) {
  try {
    templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists");
    const posts = await api.searchPosts(tag);
    console.log("post", posts);
    templates.createPostsHTML(posts);
  } catch (error) {
    templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error)
  }
}

////*********** */profile posts

import * as profilePost from "../../api/profile/post/index.mjs";

export async function displayAllprofilePosts() {
  try {
    templates.displayLoading("postCardsContainer"); // ui.displayLoading("postCardsLists");
    const posts = await profilePost.getProfilePosts();
    templates.createProfilePostHtml(posts);
  } catch (error) {
    templates.displayError("postCardsContainer", error); // ui.displayError("postCardsLists", error)
  }
}

////*********** */single post*********

import * as singlePost from "../../api/posts/specificPost.mjs";

export async function displaySinglePost() {
  try {
    templates.displayLoading("specificPostContainer"); // ui.displayLoading("postCardsLists");
    const posts = await singlePost.getPost(id);
    templates.createHTML(posts);
  } catch (error) {
    templates.displayError("specificPostContainer", error); // ui.displayError("postCardsLists", error)
  }
}
