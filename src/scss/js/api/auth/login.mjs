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

  // const result = await response.json();

  // destructuring(for storing profile and access token separately)
  const { accessToken, ...profileDetails } = await response.json();
  // console.log(result);

  // localStorage.setItem("token", result.accessToken);
  storage.save("token", accessToken);

  storage.save("profile", profileDetails);

  alert("You are now logged in");
}
