

const method = "put";

import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");

const profile = load("profile");
const profileName = profile.name;

const getProfileUrl = API_SOCIAL_URL + action + profileName;

const getProfileUpdateUrl = getProfileUrl + "/media";

/**
 * This function retrieves users updated profile details and send it to the correct API endpoint to update the profile.
 *
 * @param {object} profile This is the users new updated profile data.
 */

export async function updateProfile(profile) {
  // if (!name) {
  //   throw new Error("You need to provide a postId to update the post");
  // }

  const token = load("token");

  // if (!token) {
  //   throw new Error("You must be logged in to delete a post");
  // }

  const response = await fetch(getProfileUpdateUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: method,
    body: JSON.stringify(profile),
  });

  const updatedProfile = await response.json();
}
