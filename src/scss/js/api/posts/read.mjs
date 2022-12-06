import { API_SOCIAL_URL } from "../constant.mjs";

import { authFetch } from "../authorizedFetch.mjs";

const action = "/posts";
const method = "get";

export async function getPosts() {
  const getPostUrl = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostUrl);

  return await response.json();
  //   const myupdatedPost = await response.json();
  //   console.log(myupdatedPost);
}

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }
