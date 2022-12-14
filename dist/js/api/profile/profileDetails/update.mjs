// /// MY way of writing code

// import { API_SOCIAL_URL } from "../constant.mjs";
// import { load } from "../../storage/index.mjs";

// ////////////

// const querryString = document.location.search;
// console.log(querryString);

// const params = new URLSearchParams(querryString);
// console.log(params);

// const name = params.get("name");

// console.log(name);

// /////////////

// const action = "/posts";
const method = "put";

// const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

// console.log(updatePostUrl);
/////////////////////////
import { API_SOCIAL_URL } from "../../constant.mjs";
import { load } from "../../../storage/index.mjs";

const action = "/profiles/";

const token = load("token");
console.log(token);

const profile = load("profile");
const profileName = profile.name;

console.log(profileName);

// const profileEmail = profile.email;
// const profilBanner = profile.banner;
// const profilAvatar = profile.avatar;

const getProfileUrl = API_SOCIAL_URL + action + profileName;
console.log(getProfileUrl);

// const getProfileMediaUrl = getProfileUrl + "/media";
// console.log(getProfileMediaUrl);

const getProfileUpdateUrl = getProfileUrl + "/media";
console.log(getProfileUpdateUrl);

////////////////////////////////

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
  //   if (response.ok) {
  //     return await response.json();
  //   }
  //   throw new Error("this profile can not be edited");

  // console.log(response);
  // const json = await response.json();
  // console.log(json);
}
