import { API_SOCIAL_URL } from "../constant.mjs";

import { authFetch } from "../authorizedFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPosts(postData) {
  const createPostUrl = API_SOCIAL_URL + action;

  const response = await authFetch(createPostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();

  //   const myCreatedPost = await response.json();

  //   console.log(myCreatedPost);
}
