// import { API_SOCIAL_URL } from "../constant.mjs";
// import { headers } from "../authorizedFetch.mjs";
//import { load } from "../../storage/index.mjs";

// const action = "/posts";
// const method = "POST";

// export async function createPost(postData) {
//   try {
//     const createPostUrl = API_SOCIAL_URL + action;
//     console.log(createPostUrl);
//     const response = await fetch(createPostUrl, {
//       // headers: headers(),
//       method,
//       body: JSON.stringify(postData),
//     });

//     return await response.json();
//     // const myCreatedPost = await response.json();
//     // console.log(myCreatedPost);
//   } catch (error) {
//     console.log(error);
//   }
// }

/////********************************************* */

////////////////////////Wednessday///////////////////

// OPTION-1 again create this function without using authFetch()

import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";

export async function createPost(postData) {
  const createPostUrl = API_SOCIAL_URL + action;

  console.log(createPostUrl);
  console.log(postData);

  //   const token = localStorage.getItem(key);
  const token = load("token");
  console.log(token);

  const response = await fetch(createPostUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(postData),
  });

  console.log(response);
  const json = await response.json();
  console.log(json);
}

/////////////////////////////:::::::::::::::::::::::

// Trying Again - 2

// import { CREATE_POST_URL } from "../constant.mjs";
// import { load } from "../../storage/index.mjs";
// import { headers } from "../authorizedFetch.mjs";

//import { load } from "../../storage/index.mjs";

//const method = "post";
// export async function createPost(url, post) {
//   console.log(post);

//   try {
//     // const token = localStorage.getItem("token");
//     const token = load("token");
//     console.log(token);
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         title: post.title,
//         body: post.body,
//         // tags: post.tag,
//         media: post.image,
//         id: post.id,
//       }),
//     };

//     const response = await fetch(url, postData);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

//   return await response.json();

//   //   const myCreatedPost = await response.json();

//   //   console.log(myCreatedPost);
