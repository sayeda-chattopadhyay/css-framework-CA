import { API_SOCIAL_URL } from "../constant.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Sends user login data to the Api server.
 * stores access token and user profile details in the localStorage.
 */

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

  if (response.ok) {
    const { accessToken, ...profileDetails } = await response.json(); //  destructuring(for storing profile and access token separately)

    storage.save("token", accessToken);

    storage.save("profile", profileDetails);

    alert("You are now logged in");
  } else {
    throw new Error("Incorrect username or password");
  }
}
