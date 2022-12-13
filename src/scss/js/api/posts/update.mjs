// import { API_SOCIAL_URL } from "../constant.mjs";

// import { authFetch } from "../authorizedFetch.mjs";

// const action = "/posts";
// const method = "put";

// export async function updatePost(postData) {
//   if (!postData.id) {
//     throw new Error("You need to provide a postId to update the post");
//   }

//   const updatePostUrl = `${API_SOCIAL_URL}${action}/${postData.id}`;

//   const response = await authFetch(updatePostUrl, {
//     // headers: headers(),
//     method: method,
//     body: JSON.stringify(postData),
//   });

//   return await response.json();

// }

/// MY way of writing code

import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

////////////

const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

const id = params.get("id");

console.log(id);

/////////////

const action = "/posts";
const method = "put";

const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

console.log(updatePostUrl);

////////////////////////////////

export async function updatePost(post) {
  if (!id) {
    throw new Error("You need to provide a postId to update the post");
  }

  // const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  console.log(updatePostUrl);

  const token = load("token");
  console.log(token);

  if (!token) {
    throw new Error("You must be logged in to delete a post");
  }

  const response = await fetch(updatePostUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: method,
    body: JSON.stringify(post),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("this post can not be deleted");

  //********Below code not necessery********

  // console.log(response);
  // const json = await response.json();
  // console.log(json);
}

//************ addEventListener ******* */

// async function setDeletePostListener() {
//   try {
//     const editButton = document.querySelector(".editButton");
//     editButton.addEventListener("click", async ({ target }) => {
//       await removePost(target.dataset.id);
//     });
//   } catch (error) {
//     showError("something went wrong");
//   }
//   console.log(error);
// }

//****** add dataset id to button

//<button class = "removeButton" data-id = "20" >Delete Post no 20</button>
