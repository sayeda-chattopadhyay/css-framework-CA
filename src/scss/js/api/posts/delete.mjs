import { API_SOCIAL_URL } from "../constant.mjs";

import { authFetch } from "../authorizedFetch.mjs";
import { remove } from "../../storage/index.mjs";

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
//************** */

// my way to write code

// import { API_SOCIAL_URL } from "../constant.mjs";
// import { load } from "../../storage/index.mjs";

// const action = "/posts";
//const method = "delete";

// export async function removePost(id = 0) {

// if (!id) {
//   throw new Error("You need to provide a postId to update the post");
// }

//    const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   console.log(updatePostUrl);
//
//   const token = load("token");
//   console.log(token);

// if(!token){
//   throw new Error("You must be logged in to delete a post")
// }

//   const response = await fetch(updatePostUrl, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: method,
//   });

// if (response.ok){
//    return await response.json();
//  }
//  throw new Error("this post can not be deleted")

// ********Below code not necessery********

//   console.log(response);
//   const json = await response.json();
//   console.log(json);

// }

//************add listener******* */

// import {removePost} from ""

// async function setDeletePostListener() {
//   try {
//     const removeButton = document.querySelector(".removeButton");
//     removeButton.addEventListener("click", async ({ target }) => {
//      await removePost(target.dataset.id);
//      console.info("post deleted")

//     });
//   } catch (error) {
//     showError("something went wrong");
//   }
//   console.log(error);
// }

//setDeletePostListener()

//****** HTML add dataset id to button

//<button class = "removeButton" data-id = "20" >Delete Post no 20</button>
