import { API_SOCIAL_URL } from "../constant.mjs";
// import * as storage from "../../handlers/storage/index.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "content-Type": "application/json",
    },
    method,
    body,
  });

  // destructuring(for storing profile and access token separately)
  const { accessToken, ...profileDetails } = await response.json(); // this will help to store access token and all apart from access token separately.

  storage.save("token", accessToken);

  storage.save("profile", profileDetails);

  alert("You are now logged in");
}

// Note

//  In login() function we need to get the result to store.

//Another way to store access token
// const result = await response.json();

//  to store the access token
// localStorage.setItem("token", result.accessToken)
//here we use save () which lies in the storage folder to store access token
// storage.save("token", accessToken); to store asscess token
// storage.save("profile", profileDetails); to store profile details

// Storage.setItem("token", result.accessToken);
//  to get the access token
// localStorage.getItem("token")
