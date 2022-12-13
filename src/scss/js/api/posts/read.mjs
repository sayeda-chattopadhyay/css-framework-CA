//****************************GET POSTS *********************/

import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";
// import { createPostsHTML } from "../../views/posts/displayAllPosts.mjs";

const action = "/posts/?_author=true&_comments=true&_reactions=true";

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
    });

    console.log(response);
    const posts = await response.json();

    // return posts;

    createPostsHTML(posts);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
//******************* Get posts end *******************/

// ********************Search Bar************

const searchBar = document.getElementById("searchBar");
console.log(searchBar);

let posts = [];

searchBar.addEventListener("keyup", (event) => {
  console.log(event);

  const searchValue = event.target.value;
  console.log(searchValue);

  console.log(posts);

  const filteredPosts = posts.filter((post) => {
    const authorName = post.author.name;
    console.log(authorName);
    return (
      post.author.name.toLowerCase().includes(searchValue) ||
      post.title.toLowerCase().includes(searchValue)
    );
  });
  console.log(filteredPosts);
});

// ********************Search Bar End ************

//****************************GET posts and create html page *********************/

export function createPostsHTML(posts) {
  const postCardsLists = document.getElementById("postCardsLists");
  posts.forEach(function (post) {
    console.log(post);
    postCardsLists.innerHTML += `
    <div class="d-flex justify-content-center border border-primary my-4 ">
    <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="card" style="width: 18rem;">
                                            <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
                                            <div class="card-body">
                                              <h2 class="card-title">${post.title}</h2>
                                              <p class="card-text">${post.body}</p>
                                              <p>By ${post.author.name}</p>
                                              <p>Date: ${post.created}</p>
                                              <p>comment:${post.comments}</p>
                                              <p>reactions:${post.reaction}</p>
                                              <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>
                                            </div>
 </a>
 </div>`;
  });
}

// ********************Search Bar end ************
// *********************get single post***************

// export async function getSinglePost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }

// const querryString = document.location.search;
// console.log(querryString);

// const params = new URLSearchParams(querryString);
// console.log(params);

// const id = params.get("id");

// console.log(id);

// // const action = "/posts";

// export async function getPost(id) {
//   try {
//     if (!id) {
//       throw new Error("Required a postID");
//     }
//     const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//     console.log(getPostUrl);

//     const token = load("token");

//     console.log(token);

//     const response = await fetch(getPostUrl, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const postDetails = await response.json();

//     console.log(postDetails);

//     return postDetails;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Required a postID");
//   }

//   const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostUrl);

//   return await response.json();
// }

/* <div class='col thumbnail'>
<div class="card shadow-sm">
  <a href="../post/?id=${postData.id}">
    <div class="d-flex">
      <div style="overflow:hidden; width:300px; height:300px;">
        <img src="${postData.media}"  alt="${postData.title}"
        onerror="this.onerror=null;this.src='${blankPostImgURL}'" width="100%" class="h-100 w-100" >
        </img>
      </div>
      <div class="card-body" >
        <h5 class="card-text" >${postData.title}</h5>
        <div class="justify-content-between align-items-center">       
          <p class="text-muted" style="text-align:right">${
            postData.date
          }</p>
          <p>By ${postData.author}</p>
          </div>
          <div class="d-flex align-items-center text-muted">       
          <p class="me-3" aria-label="likes count ${
            postData.reactionsCount
          }"> ${postData.reactionsCount}</p>
          <p>Comments: ${postData.commentsCount}</p>
          </div>
          <div id="tag-container" class="text-muted fst-italic"> ${[
            ...postData.tags,
          ]}</div>
      </div>
    </div>
  </a>
</div>
</div>` */

//
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
