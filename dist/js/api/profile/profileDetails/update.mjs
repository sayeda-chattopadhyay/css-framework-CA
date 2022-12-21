const method = "put";

import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");
console.log(token);

const profile = load("profile");
const profileName = profile.name;

console.log(profileName);

const getProfileUrl = API_SOCIAL_URL + action + profileName;
console.log(getProfileUrl);

const getProfileUpdateUrl = getProfileUrl + "/media";
console.log(getProfileUpdateUrl);

export async function updateProfile(profile) {
  //   if (!name) {
  //     throw new Error("You need to provide a postId to update the post");
  //   }

  // const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const token = load("token");
  console.log(token);

  //   if (!token) {
  //     throw new Error("You must be logged in to delete a post");
  //   }

  const response = await fetch(getProfileUpdateUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: method,
    body: JSON.stringify(profile),
  });

  const updatedProfile = await response.json();

  console.log(updatedProfile);
}
