import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");
console.log(token);

const profile = load("profile");
const profileName = profile.name;

console.log("profileName:", profileName);

// const profileEmail = profile.email;
// const profilBanner = profile.banner;
// const profilAvatar = profile.avatar;

const getProfileUrl = API_SOCIAL_URL + action + profileName;
console.log("getProfileUrl:", getProfileUrl);

const followersFollowings = "?_following=true&_followers=true";

const getProfileDetailsUrl = getProfileUrl + followersFollowings;

console.log("getProfileDetailsUrl:", getProfileDetailsUrl);

export async function getProfileDetails() {
  try {
    const response = await fetch(getProfileDetailsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    const profileDetails = await response.json();

    createProfileDetailsHTML(profileDetails);

    console.log("profileDetails:", profileDetails);
  } catch (error) {
    console.log(error);
  }
}
getProfileDetails();

// create innerHTML////

const profileDetailConatiner = document.getElementById("profileDetail");
console.log(profileDetailConatiner);

export function createProfileDetailsHTML(profile) {
  profileDetailConatiner.innerHTML = `<div class="row d-flex flex-column flex-md-row justify-content-evenly align-items-center">
  <div class="col-12 col-md-6" >
        <img src="${profile.avatar}" style="width: 18rem; height : 18rem;" alt="${profile.name}"/ >
  </div>
  <div class="col-12 col-md-6 d-flex flex-column">
      <div class="my-4">
          <p class="h1">${profile.name}</p>
          <p class="lh-lg" id="userEmail">${profile.email}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center border border-gray p-2" >
          <div class="d-f flex-column">
              <p class="fw-bold" id="userPosts">Posts</p>
              <p>${profile._count.posts}</p>
          </div>
          <div class="d-f flex-column">
              <p class="fw-bold" id="userFollowes">Follower</p>
              <p>${profile._count.followers}</p>
          </div>
          <div class="d-f flex-column">
              <p class="fw-bold" id="userFollowing">Following</p>
              <p>${profile._count.following}</p>
          </div>
      </div>
      <div class="my-4">
          <a href="../../../../../../profile/edit/index.html?name=${profile.name}" class="btn btn-primary">Edit Profile</a>
      </div>

  </div>
</div>`;
}
