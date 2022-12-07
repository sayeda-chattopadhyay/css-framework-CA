// import { API_SOCIAL_URL } from "../constant.mjs";

// // import { authFetch } from "../authorizedFetch.mjs";

// // const action = "/posts";
// const method = "get";

// export async function getPosts() {
//   const getPostUrl = `${API_SOCIAL_URL}${action}`;

//   const response = await fetch(getPostUrl);

//   return await response.json();
//   //   const myupdatedPost = await response.json();
//   //   console.log(myupdatedPost);
// }

///////////////

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }

//****************************GET POSTS *********************/

import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostUrl = API_SOCIAL_URL + action;
  try {
    console.log(getPostUrl);
    const token = load("token");
    console.log(token);

    const response = await fetch(getPostUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      //   method: "GET",
      //   body: JSON.stringify(postData),
    });

    console.log(response);
    const posts = await response.json();

    createPostsHTML(posts);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

//****************************GET posts and send it to html page *********************/

const postCard = document.getElementById("postCard");

function createPostsHTML(posts) {
  posts.forEach(function (post) {
    postCard.innerHTML += `<a href="../../../../../post/specificPost/index.html?id=${post.id}" class="card ">
                                            <div class="card-body">
                                              <h2 class="card-title">${post.title}</h2>
                                              <p class="card-text">${post.body}</p>
                                              <img src="${post.media}"/ >                                        
                                            </div></a>`;
  });
}

///////////////

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }
