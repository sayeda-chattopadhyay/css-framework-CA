import { API_SOCIAL_URL } from "../constant.mjs";

const action = "/auth/register";
const method = "post";

//  Async function for register profile( sending user prolfile data which collecting through form to api)

export async function register(profile) {
  try {
    const registerURL = API_SOCIAL_URL + action;

    // const body = JSON.stringify(profile);

    // fetching register url

    const response = await fetch(registerURL, {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    const result = await response.json();
    console.log(result);

    alert("You are now registered");

    return result;
  } catch (error) {
    console.log(error);
  }
}

// Note
// here argument (profile) is the data provided by user while registering from
