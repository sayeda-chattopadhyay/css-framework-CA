import { API_SOCIAL_URL } from "../constant.mjs";

import { authFetch } from "../authorizedFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("You need to provide a postId to update the post");
  }

  const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostUrl, {
    method,
  });

  return await response.json();

  //   const myupdatedPost = await response.json();
  //   console.log(myupdatedPost);
}
