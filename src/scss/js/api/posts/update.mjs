import { API_SOCIAL_URL } from "../constant.mjs";

import { authFetch } from "../authorizedFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("You need to provide a postId to update the post");
  }

  const updatePostUrl = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  //   return await response.json();

  const myupdatedPost = await response.json();
  console.log(myupdatedPost);
}
