// import { load } from "../handlers/storage/index.mjs";
// import { load } from "../storage/index.mjs";

import { load } from "../storage/index.mjs";

//  we need this function to get the fresh token value

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// option- 1

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}

// Option 2

// export async function authFetch(url, options) {}
