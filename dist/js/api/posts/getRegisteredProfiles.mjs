import { API_ALL_REGISTERED_PROFILES_URL } from "../constant.mjs"; // url for getting all registered users
import { load } from "../../storage/index.mjs";

// import { createRegisteredUsersHTML } from "../../views/posts/displayAllRegisteredProfiles";

console.log(API_ALL_REGISTERED_PROFILES_URL);

export async function getAllRegisteredProfile() {
  const getRegisteredProfileUrl = API_ALL_REGISTERED_PROFILES_URL;
  try {
    console.log(getRegisteredProfileUrl);
    const token = load("token");
    console.log(token);

    const response = await fetch(getRegisteredProfileUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const profiles = await response.json();
    console.log(profiles);

    // return profiles;

    // createRegisteredUsersHTML(profiles);
  } catch (error) {
    console.log("The error is :", error);
  }
}

// // getAllRegisteredProfile();
// createRegisteredUsersHTML();
