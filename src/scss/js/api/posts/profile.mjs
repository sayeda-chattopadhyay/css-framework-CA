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

    // createPostsHTML(posts);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getProfilePosts();

//// GET /api/v1/social/profiles/<name>
