import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");

const profile = load("profile");

const profileName = profile?.name;

const getProfileUrl = API_SOCIAL_URL + action + profileName;

const getProfilePostsUrl = getProfileUrl + "/posts";

export async function getProfilePosts() {
  const response = await fetch(getProfilePostsUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(" Fetching posts failed");

  // createProfilePostHtml(posts);
}
// getProfilePosts();

//****************************GET posts and create html page *********************/

// function createProfilePostHtml(posts) {
//   const postCardsContainer = document.getElementById("postCardsContainer");

//   posts.forEach(function (post) {
//     postCardsContainer.innerHTML += ` <div class="d-flex justify-content-center border border-primary my-4" >
//                                         <div>
//                                             <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
//                                         </div>
//                                         <div class="card-body">
//                                           <h2 class="card-title">${post.title}</h2>
//                                           <p class="card-text">${post.body}</p>
//                                           <p class="card-text">Date:${post.created}</p>
//                                           <a href="../../../../../post/edit/index.html?id=${post.id}" class="btn btn-primary">Edit Post</a>
//                                           <a href="../../../../../profile/edit/index.html?id=${post.id}" id=${post.id} class="btn btn-primary">Delete Post</a>
//                                           <a href="../../../../../post/specificPost/index.html?id=${post.id}" class= "btn btn-primary">View Post</a>
//                                         </div>

//  </div>`;
//   });
// }
