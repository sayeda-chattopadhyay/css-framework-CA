import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles/";

export async function getProfilePosts() {
  try {
    const token = load("token");
    console.log(token);

    const profile = load("profile");
    const profileName = profile.name;

    console.log(profileName);

    const getProfileUrl = API_SOCIAL_URL + action + profileName;
    console.log(getProfileUrl);

    const response = await fetch(getProfileUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const posts = await response.json();

    // createProfilePostHtml(posts);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
getProfilePosts();

//// GET /api/v1/social/profiles/<name>

//****************************GET posts and create html page *********************/

const postCardsContainer = document.getElementById("postCardsContainer");

function createProfilePostHtml(posts) {
  posts.forEach(function (post) {
    postCardsContainer.innerHTML += `
    <div class="d-flex justify-content-center border border-primary my-4 ">                                  
                                            <div class="card-body">
                                              <h2 class="card-title">Hi ${post.name}</h2>
                                              <p class="card-text">${post.email}</p>
                                              <a href="../../../../../profile/edit/index.html?id=${post.id}" class="btn btn-primary">Edit Post</a>                                      
                                            </div>

 </div>`;
  });
}

// <li>By ${post_count.posts}</li>

//  <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
