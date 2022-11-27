import { API_SOCIAL_URL } from "../constant.mjs";
import * as storage from "../../handlers/storage/index.mjs";

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
  const { accessToken, ...profileDetails } = await response.json();
  // console.log(result);

  // localStorage.setItem("token", result.accessToken);
  storage.save("token", accessToken);

  storage.save("profile", profileDetails);

  alert("You are now logged in");
}
