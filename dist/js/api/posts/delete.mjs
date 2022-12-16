import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

// const querryString = document.location.search;
// console.log(querryString);

// const params = new URLSearchParams(querryString);
// console.log(params);

// const id = params.get("id");

// console.log(id);

// const action = "/posts";
// const method = "delete";

// export async function removePost(id = 0) {

// if (!id) {
//   throw new Error("You need to provide a postId to delete a post");
// }

//    const Url = `${API_SOCIAL_URL}${action}/${id}`;

//   console.log(Url);

//   const token = load("token");
//   console.log(token);

// if(!token){
//   throw new Error("You must be logged in to delete a post")
// }

//   const response = await fetch(Url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: method,
//   });

// if (response.ok){
//    return await response.json();
//  }
//  throw new Error("this post can not be deleted")

//   console.log(response);
//   const json = await response.json();
//   console.log(json);

// }

//*************friend */

// export async function deletePost(url, method) {
//   try {
//     const token = storage.load("accessToken");
//     const response = await fetch(url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.ok) {
//       window.location.reload();
//     } else if (!response.ok) {
//       throw alert(
//         "Something happened while trying to delete the post, try again"
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     throw alert(
//       "Something happened while trying to delete the post, try again"
//     );
//   }
// }

/////////////
// import { API_SOCIAL_URL } from "../constant.mjs";
// import { load } from "../../storage/index.mjs";

// const action = "/posts";

// export async function deletePost(id) {
//   const createPostUrl = API_SOCIAL_URL + action;

//   // console.log(createPostUrl);

//   // console.log(postData);

//   const token = load("token");
//   // console.log(token);

//   const response = await fetch(createPostUrl, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     method: "POST",
//     body: JSON.stringify(postData),
//   });

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
