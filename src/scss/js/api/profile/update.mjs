import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles/";

export async function updateProfile() {
  try {
    const token = load("token");
    console.log(token);

    const profile = load("profile");

    const profileName = profile.name;
    const profileEmail = profile.email;
    const profileBanner = profile.banner;
    const profileAvatar = profile.avatar;

    const getProfileUrl = API_SOCIAL_URL + action + profileName;
    console.log(getProfileUrl);

    const response = await fetch(getProfileUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const profileData = await response.json();

    console.log("profile", profileData);
  } catch (error) {
    console.log(error);
  }
}
getProfilePosts();

//// GET /api/v1/social/profiles/<name>

//****************************GET posts and create html page *********************/

// <li>By ${post_count.posts}</li>

//  <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >

/* <img
src=""
alt="Profile image"
class="rounded-circle me-2 img-fluid"
style="width: 400px; height: 400px; object-fit: cover mb-5"
/> */
