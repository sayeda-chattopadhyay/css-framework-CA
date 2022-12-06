import { API_SOCIAL_URL } from "../constant.mjs";
import { authFetch } from "../authorizedFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  try {
    const createPostUrl = API_SOCIAL_URL + action;
    console.log(createPostUrl);
    const response = await authFetch(createPostUrl, {
      // headers: headers(),
      method,
      body: JSON.stringify(postData),
    });

    return await response.json();
    // const myCreatedPost = await response.json();
    // console.log(myCreatedPost);
  } catch (error) {
    console.log(error);
  }
}

//////////////////////////////////

//  we need this function to get the fresh token value

// export function headers() {
//   const token = load("token");

//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };
// }

// export async function createPosts(postData) {
//     const createPostUrl = API_SOCIAL_URL + action;
// //  const createPostUrl = `${API_SOCIAL_URL}${action}`;
// console.log(createPostUrl);

//   const response = await authFetch(createPostUrl, {
//     method,
//     body: JSON.stringify(postData),
//   });

//   return await response.json();

// }
//   const myCreatedPost = await response.json();
//   console.log(response);

// OPTION-1 again create this function without using authFetch()

// import { load } from "../../storage/index.mjs";

// const action = "/posts";
// const method = "post";

// export async function createPost(postData) {
//   const createPostUrl = API_SOCIAL_URL + action;
//   console.log(createPostUrl);

//   const token = load("token");
//   console.log(token);

//   const response = await fetch(createPostUrl, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(postData),
//   });

//   return await response.json();

//   //   const myCreatedPost = await response.json();

//   //   console.log(response);
// }
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
//       method,
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
