// import { load } from "../handlers/storage/index.mjs";
import { load } from "../storage/index.mjs";

//  we need this function to get the fresh token value

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

//

export async function authFetch(url, options = {}) {
  // using spread operator. We want to include any of the options that we´ve defined already.(which is body:JSON.stringify on create.mjs file)
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}

// options = {})
