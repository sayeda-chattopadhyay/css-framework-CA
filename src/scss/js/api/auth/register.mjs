import { API_SOCIAL_URL } from "../constant.mjs";

const action = "/auth/register";
const method = "post";

//  Async function for register profile

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);

  alert("You are now registered");

  return result;
}

//
