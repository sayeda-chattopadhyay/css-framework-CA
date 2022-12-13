import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");
console.log(token);
const profile = load("profile");
const profileName = profile.name;
const profileEmail = profile.email;
const profilBanner = profile.banner;
const profilAvatar = profile.avatar;

const getProfileUrl = API_SOCIAL_URL + action + profileName;
console.log(getProfileUrl);

const getProfileMediaUrl = getProfileUrl + "/media";
console.log(getProfileMediaUrl);

const getProfilePostsUrl = getProfileUrl + "/posts";
console.log(getProfilePostsUrl);

// //////***********profile details ***************/

export async function getProfile() {}

export async function getProfilePosts() {
  try {
    const UserName = document.getElementById("UserName");
    const userAvatar = document.getElementById("userAvatar");
    const userEmail = document.getElementById("userEmail");

    UserName.innerHTML = `Hi! ${profileName}`;
    userAvatar.innerHTML = `<img
    src="profilAvatar"
    alt="Profile image"
    class="rounded-circle me-2 img-fluid"
    style="width: 400px; height: 400px; object-fit: cover mb-5"`;
    userEmail.innerHTML = `Email Id: ${profileEmail}`;

    const response = await fetch(getProfilePostsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const posts = await response.json();

    // setupSearchForm(posts); // for filtering the posts

    console.log("posts", posts);

    createProfilePostHtml(posts);
  } catch (error) {
    console.log(error);
  }
}
getProfilePosts();

//// GET /api/v1/social/profiles/<name>

//****************************GET posts and create html page *********************/

function createProfilePostHtml(posts) {
  const postCardsContainer = document.getElementById("postCardsContainer");

  posts.forEach(function (post) {
    postCardsContainer.innerHTML += ` <div class="d-flex justify-content-center border border-primary my-4" >
                                        <div> 
                                            <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
                                        </div>
                                        <div class="card-body">
                                          <h2 class="card-title">${post.title}</h2>
                                          <p class="card-text">${post.body}</p> 
                                          <p class="card-text">Date:${post.created}</p> 
                                          <a href="../../../../../post/edit/index.html?id=${post.id}" class="btn btn-primary">Edit Post</a>
                                          <a href="../../../../../profile/edit/index.html?id=${post.id}" class="btn btn-primary">Delete Post</a>
                                          <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>                                        
                                        </div>

 </div>`;
  });
}

// const getProfileUrl = API_SOCIAL_URL + action + profileName;
// console.log(getProfileUrl);

// const getProfileMediaUrl = getProfileUrl + "/media";
// console.log(getProfileMediaUrl);

// const getProfilePostsUrl = getProfileUrl + "/posts";

// console.log(getProfilePostsUrl);
